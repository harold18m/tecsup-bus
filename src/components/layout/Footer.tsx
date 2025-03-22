
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '@/components/ui/Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-50 to-white pt-12 pb-8 border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="col-span-1">
            <Logo />
            <p className="mt-4 text-gray-600 text-sm">
              Simplifying transportation for Tecsup students and staff through innovative technology solutions.
            </p>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-gray-800 font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-tecsup text-sm transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-tecsup text-sm transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/routes" className="text-gray-600 hover:text-tecsup text-sm transition-colors">
                  Routes
                </Link>
              </li>
              <li>
                <Link to="/login" className="text-gray-600 hover:text-tecsup text-sm transition-colors">
                  Login
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-gray-800 font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/faq" className="text-gray-600 hover:text-tecsup text-sm transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/help" className="text-gray-600 hover:text-tecsup text-sm transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-600 hover:text-tecsup text-sm transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-600 hover:text-tecsup text-sm transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-gray-800 font-semibold mb-4">Contact</h3>
            <address className="not-italic text-sm text-gray-600 space-y-2">
              <p>Tecsup Campus</p>
              <p>Lima, Peru</p>
              <p>
                <a href="mailto:contact@tecsup.edu.pe" className="hover:text-tecsup transition-colors">
                  contact@tecsup.edu.pe
                </a>
              </p>
              <p>
                <a href="tel:+51123456789" className="hover:text-tecsup transition-colors">
                  +51 123 456 789
                </a>
              </p>
            </address>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-gray-100">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Penguins on Road for Tecsup. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-4">
              <a 
                href="https://facebook.com/tecsup" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-tecsup transition-colors"
              >
                Facebook
              </a>
              <a 
                href="https://twitter.com/tecsup" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-tecsup transition-colors"
              >
                Twitter
              </a>
              <a 
                href="https://instagram.com/tecsup" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-tecsup transition-colors"
              >
                Instagram
              </a>
              <a 
                href="https://linkedin.com/company/tecsup" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-tecsup transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
