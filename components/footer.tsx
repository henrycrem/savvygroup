import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white border-t">
      <div className="mx-auto py-10">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-semibold text-gold">Savvy Group of Companies</h2>
          <p className="text-sm text-gray-300">
            A versatile conglomerate with a diverse portfolio, including thriving coffee shops, productive gold mines, vibrant bars, and successful construction companies.
          </p>
        </div>

        <div className="flex justify-center mb-6">
          {/* Social Media Icons */}
          <a href="https://www.facebook.com/Savvylib" target="_blank" rel="noopener noreferrer" className="text-yellow-500 hover:text-yellow-800 mx-2">
            <FaFacebook size={24} />
          </a>
          <a href="https://twitter.com/Savvylib" target="_blank" rel="noopener noreferrer" className="text-yellow-500 hover:text-yellow-800 mx-2">
            <FaTwitter size={24} />
          </a>
          <a href="https://www.instagram.com/savvyloungelib/" target="_blank" rel="noopener noreferrer" className="text-yellow-500 hover:text-yellow-800 mx-2">
            <FaInstagram size={24} />
          </a>
        </div>

        <div className="text-center">
          {/* Email Link */}
          <a href="mailto:contact@savvygroup.com" className="text-yellow-500 hover:text-yellow-800">
            Contact us via email
          </a>
        </div>

        <p className="text-center text-xs text-gray-300 mt-6">
          &copy; {new Date().getFullYear()} Savvy Group of Companies. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
