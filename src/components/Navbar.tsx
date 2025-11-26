import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Car, Phone } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Used Cars", path: "/cars" },
    { name: "Used Vans", path: "/vans" },
    { name: "Finance", path: "/finance" },
    { name: "Sell Your Car", path: "/sell" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="bg-accent rounded-lg p-2 group-hover:scale-110 transition-transform">
              <Car className="h-6 w-6 text-accent-foreground" />
            </div>
            <span className="text-2xl font-bold tracking-tight">
              Car<span className="text-accent">Vault</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link key={link.path} to={link.path}>
                <Button
                  variant="ghost"
                  className="text-foreground hover:bg-accent/20 hover:text-foreground font-medium transition-colors"
                >
                  {link.name}
                </Button>
              </Link>
            ))}
            <Button variant="default" className="ml-4 bg-accent hover:bg-accent/90 text-accent-foreground shadow-accent">
              <Phone className="h-4 w-4 mr-2" />
              Call Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-3 rounded-lg hover:bg-muted transition-colors font-medium"
                >
                  {link.name}
                </Link>
              ))}
              <Button variant="default" className="mx-4 mt-2 bg-accent hover:bg-accent/90 text-accent-foreground">
                <Phone className="h-4 w-4 mr-2" />
                Call Us
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
