
import React from 'react';
import { BUSINESS_INFO } from '../constants';

const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 bg-blue-900 text-white shadow-lg py-4 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center transition-all">
      <div className="flex items-center space-x-2 mb-4 md:mb-0">
        <i className="fas fa-pipe text-blue-400 text-2xl"></i>
        <span className="font-bold text-xl tracking-tight">
          SewerLine <span className="text-blue-400">Tunneling</span>
        </span>
      </div>
      
      <div className="flex flex-wrap justify-center items-center space-x-6">
        <a href="#services" className="hover:text-blue-300 transition-colors font-medium">Services</a>
        <a href="#guide" className="hover:text-blue-300 transition-colors font-medium">Expert Guide</a>
        <a href="#faq" className="hover:text-blue-300 transition-colors font-medium">FAQ</a>
        <a 
          href={`tel:${BUSINESS_INFO.phone.replace(/\D/g, '')}`} 
          className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-full font-bold flex items-center space-x-2 transition-transform transform hover:scale-105"
        >
          <i className="fas fa-phone-alt"></i>
          <span>{BUSINESS_INFO.phone}</span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
