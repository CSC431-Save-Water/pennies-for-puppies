import { Link, Outlet, useLocation } from "react-router";
import { Heart } from "lucide-react";
import { Button } from "./ui/button";

export function Layout() {
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <Heart className="h-8 w-8 text-rose-500 fill-rose-500" />
              <span className="text-xl font-semibold text-gray-900">
                Pennies for Disabled Puppies
              </span>
            </Link>

            <div className="hidden md:flex items-center gap-6">
              <Link
                to="/"
                className={`transition-colors ${
                  isActive("/") && !isActive("/about") && !isActive("/donate")
                    ? "text-rose-600 font-medium"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`transition-colors ${
                  isActive("/about")
                    ? "text-rose-600 font-medium"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                About
              </Link>
              <Button asChild>
                <Link to="/donate">Donate</Link>
              </Button>
            </div>

            {/* Mobile menu */}
            <div className="md:hidden flex items-center gap-3">
              <Link
                to="/"
                className={`text-sm ${
                  isActive("/") && !isActive("/about") && !isActive("/donate")
                    ? "text-rose-600"
                    : "text-gray-600"
                }`}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`text-sm ${
                  isActive("/about") ? "text-rose-600" : "text-gray-600"
                }`}
              >
                About
              </Link>
              <Button size="sm" asChild>
                <Link to="/donate">Donate</Link>
              </Button>
            </div>
          </nav>
        </div>
      </header>

      {/* Main content */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 border-t mt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Heart className="h-6 w-6 text-rose-500 fill-rose-500" />
              <span className="text-gray-600">
                © 2026 Pennies for Disabled Puppies
              </span>
            </div>
            <p className="text-gray-500 text-sm text-center">
              A registered 501(c)(3) non-profit organization dedicated to
              helping disabled puppies live their best lives.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
