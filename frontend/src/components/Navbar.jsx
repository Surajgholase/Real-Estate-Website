import React from 'react';
import { Home, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-2 text-xl font-bold text-blue-600">
            <Home className="w-6 h-6" />
            <span>LuxeVilla</span>
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#overview" className="hover:text-blue-600 transition-colors">Overview</a>
            <a href="#amenities" className="hover:text-blue-600 transition-colors">Amenities</a>
            <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
            <a href="#faq" className="hover:text-blue-600 transition-colors">FAQ</a>
            <a 
              href="#contact" 
              className="px-5 py-2.5 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all flex items-center gap-2 shadow-lg shadow-blue-200"
            >
              Enquire Now
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
