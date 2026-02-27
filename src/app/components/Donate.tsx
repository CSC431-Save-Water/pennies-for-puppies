import { useState } from "react";
import { Heart, CreditCard, Shield, CheckCircle } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { toast } from "sonner";

export function Donate() {
  const [donationType, setDonationType] = useState<"one-time" | "monthly">(
    "one-time"
  );
  const [amount, setAmount] = useState<string>("25");
  const [customAmount, setCustomAmount] = useState<string>("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const presetAmounts = ["10", "25", "50", "100", "250"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.cardNumber ||
      !formData.expiry ||
      !formData.cvv
    ) {
      toast.error("Please fill in all fields");
      return;
    }

    const finalAmount = amount === "custom" ? customAmount : amount;
    if (!finalAmount || parseFloat(finalAmount) <= 0) {
      toast.error("Please enter a valid donation amount");
      return;
    }

    // Simulate donation submission
    toast.success(
      `Thank you for your $${finalAmount} ${donationType} donation! 🐾`
    );

    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      cardNumber: "",
      expiry: "",
      cvv: "",
    });
    setAmount("25");
    setCustomAmount("");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const impact = [
    {
      amount: "$10",
      description: "Provides food and supplies for one puppy for a week",
    },
    {
      amount: "$25",
      description: "Covers basic veterinary checkup and vaccinations",
    },
    {
      amount: "$50",
      description: "Funds rehabilitation equipment and therapy sessions",
    },
    {
      amount: "$100",
      description: "Supports specialized medical treatments",
    },
    {
      amount: "$250",
      description: "Sponsors a life-changing surgery for a disabled puppy",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-rose-50 to-pink-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <Heart className="h-16 w-16 mx-auto mb-6 text-rose-600 fill-rose-600" />
          <h1 className="text-4xl md:text-5xl mb-4 text-gray-900">
            Make a Difference Today
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Your generous donation helps us rescue, rehabilitate, and rehome
            disabled puppies in need. Every penny counts!
          </p>
        </div>
      </section>

      {/* Donation Form Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
            {/* Main Donation Form */}
            <div className="md:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Donation Details</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Donation Type */}
                    <div>
                      <Label className="mb-3 block">Donation Type</Label>
                      <RadioGroup
                        value={donationType}
                        onValueChange={(value: string) =>
                          setDonationType(value as "one-time" | "monthly")
                        }
                        className="flex gap-4"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="one-time" id="one-time" />
                          <Label htmlFor="one-time" className="cursor-pointer">
                            One-time
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="monthly" id="monthly" />
                          <Label htmlFor="monthly" className="cursor-pointer">
                            Monthly
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>

                    {/* Donation Amount */}
                    <div>
                      <Label className="mb-3 block">Select Amount</Label>
                      <div className="grid grid-cols-3 gap-3 mb-3">
                        {presetAmounts.map((preset) => (
                          <button
                            key={preset}
                            type="button"
                            onClick={() => setAmount(preset)}
                            className={`py-3 px-4 rounded-lg border-2 transition-all ${amount === preset
                                ? "border-rose-500 bg-rose-50 text-rose-700"
                                : "border-gray-200 hover:border-gray-300"
                              }`}
                          >
                            ${preset}
                          </button>
                        ))}
                        <button
                          type="button"
                          onClick={() => setAmount("custom")}
                          className={`py-3 px-4 rounded-lg border-2 transition-all ${amount === "custom"
                              ? "border-rose-500 bg-rose-50 text-rose-700"
                              : "border-gray-200 hover:border-gray-300"
                            }`}
                        >
                          Custom
                        </button>
                      </div>
                      {amount === "custom" && (
                        <div>
                          <Label htmlFor="customAmount">Custom Amount</Label>
                          <Input
                            id="customAmount"
                            type="number"
                            placeholder="Enter amount"
                            value={customAmount}
                            onChange={(e) => setCustomAmount(e.target.value)}
                            min="1"
                            step="0.01"
                          />
                        </div>
                      )}
                    </div>

                    {/* Personal Information */}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name</Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          placeholder="Doe"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john.doe@example.com"
                      />
                    </div>

                    {/* Payment Information */}
                    <div className="pt-4 border-t">
                      <h3 className="text-lg mb-4 flex items-center gap-2">
                        <CreditCard className="h-5 w-5" />
                        Payment Information
                      </h3>

                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="cardNumber">Card Number</Label>
                          <Input
                            id="cardNumber"
                            name="cardNumber"
                            value={formData.cardNumber}
                            onChange={handleInputChange}
                            placeholder="1234 5678 9012 3456"
                            maxLength={19}
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="expiry">Expiry Date</Label>
                            <Input
                              id="expiry"
                              name="expiry"
                              value={formData.expiry}
                              onChange={handleInputChange}
                              placeholder="MM/YY"
                              maxLength={5}
                            />
                          </div>
                          <div>
                            <Label htmlFor="cvv">CVV</Label>
                            <Input
                              id="cvv"
                              name="cvv"
                              value={formData.cvv}
                              onChange={handleInputChange}
                              placeholder="123"
                              maxLength={4}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <Button type="submit" className="w-full" size="lg">
                      <Heart className="h-5 w-5 mr-2" />
                      Complete Donation
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Security Notice */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <Shield className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-sm mb-1">Secure Donation</h3>
                      <p className="text-xs text-gray-600">
                        Your payment information is encrypted and secure. We
                        never store your card details.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Tax Deductible */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-rose-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-sm mb-1">Tax Deductible</h3>
                      <p className="text-xs text-gray-600">
                        Pennies for Disabled Puppies is a 501(c)(3)
                        organization. Your donation is tax-deductible.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl text-center mb-8 text-gray-900">
              Your Impact
            </h2>
            <div className="space-y-4">
              {impact.map((item, index) => (
                <Card key={index}>
                  <CardContent className="p-4 flex items-center gap-4">
                    <div className="text-2xl text-rose-600 min-w-[80px]">
                      {item.amount}
                    </div>
                    <div className="text-gray-600">{item.description}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
