import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="mb-6">
              <h3 className="font-serif text-3xl font-bold text-primary">
                मांगल्य
              </h3>
              <p className="text-sm tracking-widest text-primary/80 uppercase">
                Mangal Karyalay
              </p>
            </div>
            <p className="text-secondary-foreground/80 leading-relaxed mb-6">
              Creating unforgettable celebrations for over two decades. Your dream wedding venue in the heart of Mumbai.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-primary" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-primary" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5 text-primary" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-xl font-semibold text-primary mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Gallery", path: "/gallery" },
                { name: "Services & Packages", path: "/services" },
                { name: "Contact Us", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-secondary-foreground/80 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif text-xl font-semibold text-primary mb-6">
              Our Services
            </h4>
            <ul className="space-y-3 text-secondary-foreground/80">
              <li>Wedding Ceremonies</li>
              <li>Reception Parties</li>
              <li>Corporate Events</li>
              <li>Catering Services</li>
              <li>Decoration & Design</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-xl font-semibold text-primary mb-6">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-secondary-foreground/80">
                  Plot No. 32, 3, The Hindu Friends Society Marg, Jogeshwari East, Mumbai - 400060
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="tel:+919869384849"
                  className="text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  +91 98693 84849
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="mailto:info@mangalyamangalkaryalay.com"
                  className="text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  info@mangalyamangalkaryalay.com
                </a>
              </li>
              <li className="flex gap-3">
                <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-secondary-foreground/80">
                  Mon - Sun: 10:00 AM - 10:00 PM
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-secondary-foreground/60 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Mangalya Mangal Karyalay. All rights reserved.
            </p>
            <p className="text-secondary-foreground/60 text-sm">
              Shree Bhagawati Catering Service
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
