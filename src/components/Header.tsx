import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MessageCircle } from 'lucide-react';
import { COMPANY_INFO, CONTACT_INFO } from '../constants';
import { generateEmailUrl, generatePhoneUrl, generateWhatsAppUrl } from '../utils/helpers';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Booking', href: '/booking' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Teams', href: '/teams' },
    { name: 'Warranty', href: '/warranty' },
    { name: 'Service Area', href: '/service-area' },
    { name: 'Reviews', href: '/reviews' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="fixed w-full top-0 z-50 bg-white/10 backdrop-blur-lg border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">AC</span>
            </div>
            <div>
              <h1 className="text-white font-bold text-xl">{COMPANY_INFO.shortName}</h1>
              <p className="text-purple-200 text-xs">{COMPANY_INFO.tagline}</p>
            </div>
          </Link>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-6">
            <a 
              href={generatePhoneUrl(CONTACT_INFO.phone)} 
              className="flex items-center space-x-2 text-white hover:text-purple-200 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>{CONTACT_INFO.phone}</span>
            </a>
            <a 
              href={generateEmailUrl(CONTACT_INFO.email)}
              className="flex items-center space-x-2 text-white hover:text-purple-200 transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>{CONTACT_INFO.email}</span>
            </a>
            <a 
              href={generateWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white hover:text-purple-200"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Navigation */}
        <nav className="hidden lg:block pb-4">
          <div className="flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? 'text-purple-300 border-b-2 border-purple-300'
                    : 'text-white hover:text-purple-200'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white/10 backdrop-blur-lg rounded-lg mt-4 p-4">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-sm font-medium transition-colors ${
                    isActive(item.href)
                      ? 'text-purple-300'
                      : 'text-white hover:text-purple-200'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-white/20">
                <a href={generatePhoneUrl(CONTACT_INFO.phone)} className="flex items-center space-x-2 text-white mb-2">
                  <Phone className="w-4 h-4" />
                  <span>{CONTACT_INFO.phone}</span>
                </a>
                <a href={generateEmailUrl(CONTACT_INFO.email)} className="flex items-center space-x-2 text-white mb-2">
                  <Mail className="w-4 h-4" />
                  <span>{CONTACT_INFO.email}</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;