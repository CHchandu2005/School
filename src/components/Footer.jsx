import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, GraduationCap } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-brown-800 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap size={28} className="text-brown-200" />
              <div>
                <h2 className="text-lg font-bold text-white">Municipal High School</h2>
                <p className="text-xs text-brown-200">Laxminagar, Andhra Pradesh</p>
              </div>
            </div>
            <p className="text-brown-200 mb-4">
              Providing quality education and empowering students to excel in academics, sports, and life skills since 1985.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-brown-200 hover:text-white" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-brown-200 hover:text-white" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-brown-200 hover:text-white" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div className='md:ps-10'>
            <h3 className="text-lg font-semibold mb-4  text-white">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/" className="text-brown-200 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-brown-200 hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/updates" className="text-brown-200 hover:text-white transition-colors">Daily Updates</Link>
              </li>
              <li>
                <Link to="/gallery" className="text-brown-200 hover:text-white transition-colors">Gallery</Link>
              </li>
              <li>
                <Link to="/staff" className="text-brown-200 hover:text-white transition-colors">Our Staff</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-brown-200 shrink-0 mt-1" />
                <span className="text-brown-200">123 School Road, Laxminagar, Andhra Pradesh, 500001, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-brown-200" />
                <span className="text-brown-200">+91 9876543210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-brown-200" />
                <span className="text-brown-200">info@mhslaxminagar.edu.in</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">School Hours</h3>
            <ul className="space-y-2">
              <li className="text-brown-200">Monday - Friday: 8:00 AM - 4:30 PM</li>
              <li className="text-brown-200">Saturday: 8:00 AM - 12:30 PM</li>
              <li className="text-brown-200">Sunday: Closed</li>
              <li className="text-brown-200 mt-4">Office Hours: 9:00 AM - 3:00 PM</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-brown-700 text-center">
          <p className="text-brown-300 text-sm">
            © {currentYear} Municipal High School Laxminagar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};