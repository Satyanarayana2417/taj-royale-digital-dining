
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white">
      <div className="taj-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo & About */}
          <div>
            <Link to="/" className="text-3xl font-serif font-bold">
              Taj<span className="text-gold">Royale</span>
            </Link>
            <p className="mt-4 text-neutral-300">
              Experience the finest culinary journey with authentic flavors and exquisite ambiance at Taj Royale.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-neutral-300 hover:text-gold transition-colors duration-300">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-neutral-300 hover:text-gold transition-colors duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-neutral-300 hover:text-gold transition-colors duration-300">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-serif mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { path: '/', label: 'Home' },
                { path: '/about', label: 'About Us' },
                { path: '/menu', label: 'Menu' },
                { path: '/reservation', label: 'Reservations' },
                { path: '/gallery', label: 'Gallery' },
                { path: '/contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path}
                    className="text-neutral-300 hover:text-gold transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-xl font-serif mb-4">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-gold mr-2 mt-1" />
                <p className="text-neutral-300">
                  123 Luxury Lane, Fine Dining District, Mumbai, India
                </p>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-gold mr-2" />
                <a 
                  href="tel:+919876543210" 
                  className="text-neutral-300 hover:text-gold transition-colors duration-300"
                >
                  +91 (987) 654-3210
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-gold mr-2" />
                <a 
                  href="mailto:info@tajroyale.com" 
                  className="text-neutral-300 hover:text-gold transition-colors duration-300"
                >
                  info@tajroyale.com
                </a>
              </div>
            </div>
          </div>
          
          {/* Opening Hours */}
          <div>
            <h3 className="text-xl font-serif mb-4">Opening Hours</h3>
            <ul className="space-y-2 text-neutral-300">
              <li className="flex justify-between">
                <span>Monday - Thursday</span>
                <span>12:00 - 22:00</span>
              </li>
              <li className="flex justify-between">
                <span>Friday - Saturday</span>
                <span>12:00 - 23:00</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span>12:00 - 21:00</span>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="border-neutral-800 my-8" />
        
        {/* Copyright */}
        <div className="text-center text-neutral-400">
          <p>&copy; {new Date().getFullYear()} Taj Royale. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
