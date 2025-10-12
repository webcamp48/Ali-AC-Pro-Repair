import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import { COMPANY_INFO, CONTACT_INFO, SOCIAL_LINKS } from '../constants';
import { generateEmailUrl, generatePhoneUrl } from '../utils/helpers';

const Footer = () => {
  return (
    <footer className="bg-black/20 backdrop-blur-lg border-t border-white/20 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">AC</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">{COMPANY_INFO.shortName}</h3>
                <p className="text-purple-200 text-sm">{CONTACT_INFO.address}</p>
              </div>
            </div>
            <p className="text-purple-200 mb-4">
              Professional AC and washing machine repair services across {COMPANY_INFO.tagline}.
              Fast, reliable, and affordable solutions for all your appliance needs.
            </p>
            <div className="flex space-x-4">
              <a href={SOCIAL_LINKS.facebook} className="text-white hover:text-purple-300 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href={SOCIAL_LINKS.twitter} className="text-white hover:text-purple-300 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href={SOCIAL_LINKS.instagram} className="text-white hover:text-purple-300 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href={SOCIAL_LINKS.youtube} className="text-white hover:text-purple-300 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-purple-200 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-purple-200 hover:text-white transition-colors">Our Services</Link></li>
              <li><Link to="/booking" className="text-purple-200 hover:text-white transition-colors">Book Service</Link></li>
              <li><Link to="/pricing" className="text-purple-200 hover:text-white transition-colors">Pricing</Link></li>
              <li><Link to="/warranty" className="text-purple-200 hover:text-white transition-colors">Warranty</Link></li>
              <li><Link to="/reviews" className="text-purple-200 hover:text-white transition-colors">Reviews</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-purple-200">AC Installation</li>
              <li className="text-purple-200">AC Repair</li>
              <li className="text-purple-200">AC Maintenance</li>
              <li className="text-purple-200">Washing Machine Repair</li>
              <li className="text-purple-200">Refrigerator Service</li>
              <li className="text-purple-200">Emergency Service</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-purple-300" />
                <a href={generatePhoneUrl(CONTACT_INFO.phone)} className="text-purple-200 hover:text-white transition-colors">
                  {CONTACT_INFO.phone}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-purple-300" />
                <a href={generateEmailUrl(CONTACT_INFO.email)}  className="text-purple-200 hover:text-white transition-colors">
                  {CONTACT_INFO.email}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-purple-300" />
                <span className="text-purple-200"> {CONTACT_INFO.address}</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-purple-300 font-arabic" />
                <span className="text-purple-200"> {CONTACT_INFO.addressArabic}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-purple-300" />
                <span className="text-purple-200">{CONTACT_INFO.workingHours}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <a href={COMPANY_INFO.url} target='_blank' className="text-purple-200">
            &copy; 2025 {COMPANY_INFO.name}. All rights reserved.
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;