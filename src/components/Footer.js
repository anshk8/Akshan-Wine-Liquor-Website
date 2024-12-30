import React from 'react';
import { FaInstagram, FaYelp } from 'react-icons/fa'; // Import icons

export const Footer = () => {
  return (
    <footer className="w-full bg-gray-800 text-white py-8">
      <div className="flex flex-col items-center md:flex-row justify-between px-6">
        {/* Copyright Text */}
        <p className="text-sm mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} Akshan Wine and Liquor. All rights reserved.
        </p>

        {/* Social Links */}
        <div className="flex flex-col items-center md:items-start mr-10">
          <p className="text-lg mb-2">Follow us on</p>
          <div className="flex space-x-6">
            {/* Instagram Link with Icon */}
            <a 
              href="https://www.instagram.com/akshan_wine_and_liquor/?hl=en" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-gray-400 flex items-center space-x-2">
              <FaInstagram className="text-3xl" />
              <span>Instagram</span>
            </a>
            
            {/* Yelp Link with Icon */}
            <a 
              href="https://www.yelp.ca/biz/akshan-wine-and-liquor-holtsville-4" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-gray-400 flex items-center space-x-2">
              <FaYelp className="text-3xl" />
              <span>Yelp</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
