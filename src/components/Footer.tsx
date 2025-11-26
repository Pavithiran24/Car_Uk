import { Link } from "react-router-dom";
import { Car, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-accent rounded-lg p-2">
                <Car className="h-5 w-5 text-accent-foreground" />
              </div>
              <span className="text-xl font-bold">
                Car<span className="text-accent">Vault</span>
              </span>
            </div>
            <p className="text-primary-foreground/80 mb-4 text-sm leading-relaxed">
              Your trusted partner in finding the perfect vehicle. Quality cars and vans at competitive prices.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="bg-primary-foreground/10 p-2 rounded-lg hover:bg-accent transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="bg-primary-foreground/10 p-2 rounded-lg hover:bg-accent transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="bg-primary-foreground/10 p-2 rounded-lg hover:bg-accent transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="bg-primary-foreground/10 p-2 rounded-lg hover:bg-accent transition-colors">
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/cars" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Used Cars
                </Link>
              </li>
              <li>
                <Link to="/vans" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Used Vans
                </Link>
              </li>
              <li>
                <Link to="/finance" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Finance Options
                </Link>
              </li>
              <li>
                <Link to="/sell" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Sell Your Car
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold mb-4 text-lg">Services</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-primary-foreground/80">Part Exchange</li>
              <li className="text-primary-foreground/80">Finance Calculator</li>
              <li className="text-primary-foreground/80">Vehicle Inspection</li>
              <li className="text-primary-foreground/80">Warranty Options</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold mb-4 text-lg">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-0.5 text-accent flex-shrink-0" />
                <span className="text-primary-foreground/80">123 Auto Street, London, UK</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-accent flex-shrink-0" />
                <span className="text-primary-foreground/80">+44 20 1234 5678</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-accent flex-shrink-0" />
                <span className="text-primary-foreground/80">info@carvault.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
          <p>&copy; 2024 CarVault. All rights reserved. | Privacy Policy | Terms & Conditions</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
