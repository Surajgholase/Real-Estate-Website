import React from 'react';
import { Home } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 text-2xl font-bold mb-6">
              <Home className="w-8 h-8 text-blue-400" />
              <span>LuxeVilla</span>
            </div>
            <p className="text-slate-400 max-w-md leading-relaxed">
              Crafting premium living spaces that blend modern luxury with sustainable design. 
              Our commitment is to deliver homes that inspire a better way of life.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Home</a></li>
              <li><a href="#overview" className="hover:text-blue-400 transition-colors">Overview</a></li>
              <li><a href="#amenities" className="hover:text-blue-400 transition-colors">Amenities</a></li>
              <li><a href="#about" className="hover:text-blue-400 transition-colors">About Us</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-6">Location</h4>
            <p className="text-slate-400 mb-2">123 Luxury Lane, Whitefield</p>
            <p className="text-slate-400 mb-4">Bangalore, KA 560066</p>
            <p className="text-slate-400">Email: sales@luxevilla.com</p>
            <p className="text-slate-400">Phone: +91 98765 43210</p>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
          <p>© 2024 LuxeVilla Heights. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="/admin" className="hover:text-white transition-colors">Admin Login</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
