import math
import re

from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

MALWARE_TOKEN_PATTERN = re.compile(r"(?:[A-Za-z0-9+/]{48,}={0,2})|(?:[0-9a-fA-F]{64,})")
REQUEST_ENTROPY_THRESHOLD = 5.2
TOKEN_ENTROPY_THRESHOLD = 4.4
MIN_SCAN_BYTES = 96
MAX_SCAN_BYTES = 8192

ATTACK_PATTERNS = {
    "sql_injection": re.compile(
        r"'\s*(or|and)\s*'?\d"
        r"|--\s*$"
        r"|;\s*--"
        r"|\bor\b\s+\d+=\d+"
        r"|\b(union\s+select|drop\s+table|insert\s+into|delete\s+from"
        r"|update\s+\w+\s+set|exec\s*\(|execute\s*\(|xp_\w+|sp_\w+)\b",
        re.IGNORECASE | re.MULTILINE,
    ),
    "xss": re.compile(
        r"<\s*script"
        r"|javascript\s*:"
        r"|on\w+\s*="
        r"|<\s*iframe"
        r"|document\.cookie"
        r"|alert\s*\("
        r"|eval\s*\(",
        re.IGNORECASE,
    ),
    "path_traversal": re.compile(
        r"\.\./|\.\.\\|%2e%2e[%2f%5c]|/etc/passwd|/etc/shadow|/proc/self",
        re.IGNORECASE,
    ),
    "command_injection": re.compile(
        r";\s*(ls|cat|id|whoami|uname|curl|wget|bash|sh)\b"
        r"|\|\s*(cat|bash|sh|nc|netcat)\b"
        r"|\$\([^)]+\)"
        r"|`[^`]+`",
    ),
}


def shannon_entropy(payload: bytes) -> float:
    if not payload:
        return 0.0

    payload_len = len(payload)
    frequencies = {}

    for byte in payload:
        frequencies[byte] = frequencies.get(byte, 0) + 1

    return -sum(
        (count / payload_len) * math.log2(count / payload_len)
        for count in frequencies.values()
    )


def contains_attack_pattern(text: str) -> str | None:
    for category, pattern in ATTACK_PATTERNS.items():
        if pattern.search(text):
            return category
    return None


def looks_like_malware(payload: bytes) -> str | None:
    sample = payload[:MAX_SCAN_BYTES]

    if len(sample) < MIN_SCAN_BYTES:
        return None

    if shannon_entropy(sample) >= REQUEST_ENTROPY_THRESHOLD:
        return "high_entropy"

    text_sample = sample.decode("utf-8", errors="ignore")
    for token in MALWARE_TOKEN_PATTERN.findall(text_sample):
        if shannon_entropy(token.encode("utf-8")) >= TOKEN_ENTROPY_THRESHOLD:
            return "high_entropy_token"

    return contains_attack_pattern(text_sample)


def build_request_scan_payload() -> bytes:
    parts = [
        request.method.encode("utf-8"),
        request.path.encode("utf-8"),
        request.query_string,
        request.get_data(cache=True, as_text=False) or b"",
    ]
    header_lines = []
    ignored_headers = {"authorization", "cookie"}

    for name, value in request.headers.items():
        if name.lower() in ignored_headers:
            continue
        header_lines.append(f"{name}: {value}")

    parts.append("\n".join(header_lines).encode("utf-8", errors="ignore"))
    return b"\n".join(part for part in parts if part)


@app.before_request
def inspect_request_entropy():
    reason = looks_like_malware(build_request_scan_payload())
    if reason:
        app.logger.warning(
            "Blocked %s %s — reason: %s",
            request.method, request.path, reason,
        )
        return jsonify({
            "success": False,
            "error": "request_blocked",
            "message": "Your request was flagged as potentially malicious and could not be processed.",
        }), 403

    return None


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/about")
def about():
    return render_template("about.html")


@app.route("/donate")
def donate():
    return render_template("donate.html")


@app.route("/api/donate", methods=["POST"])
def process_donation():
    data = request.get_json()

    first_name = data.get("firstName", "").strip()
    last_name = data.get("lastName", "").strip()
    email = data.get("email", "").strip()
    card_number = data.get("cardNumber", "").strip()
    expiry = data.get("expiry", "").strip()
    cvv = data.get("cvv", "").strip()
    amount = data.get("amount", "").strip()
    donation_type = data.get("donationType", "one-time")

    if not all([first_name, last_name, email, card_number, expiry, cvv, amount]):
        return jsonify({"success": False, "message": "Please fill in all fields"}), 400

    try:
        amt = float(amount)
        if amt <= 0:
            raise ValueError
    except ValueError:
        return jsonify({"success": False, "message": "Please enter a valid donation amount"}), 400

    # In a real app you'd process the payment here
    return jsonify({
        "success": True,
        "message": f"Thank you for your ${amt:.2f} {donation_type} donation! 🐾"
    })


if __name__ == "__main__":
    app.run(debug=True, port=5000)
