import React from 'react';
import { Leaf, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Leaf className="h-6 w-6 text-green-500" />
              <span className="font-bold text-xl">Step4Eco</span>
            </div>
            <p className="text-gray-400 mb-6">
              Taking steps toward a sustainable future through education, 
              community action, and innovative environmental solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#facebook" className="text-gray-400 hover:text-green-500 transition-colors duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#twitter" className="text-gray-400 hover:text-green-500 transition-colors duration-300">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#instagram" className="text-gray-400 hover:text-green-500 transition-colors duration-300">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#linkedin" className="text-gray-400 hover:text-green-500 transition-colors duration-300">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#youtube" className="text-gray-400 hover:text-green-500 transition-colors duration-300">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-400 hover:text-green-500 transition-colors duration-300">Home</a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-green-500 transition-colors duration-300">About Us</a>
              </li>
              <li>
                <a href="#programs" className="text-gray-400 hover:text-green-500 transition-colors duration-300">Programs</a>
              </li>
              <li>
                <a href="#impact" className="text-gray-400 hover:text-green-500 transition-colors duration-300">Our Impact</a>
              </li>
              <li>
                <a href="#resources" className="text-gray-400 hover:text-green-500 transition-colors duration-300">Resources</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-green-500 transition-colors duration-300">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-6">Programs</h3>
            <ul className="space-y-3">
              <li>
                <a href="#reforestation" className="text-gray-400 hover:text-green-500 transition-colors duration-300">Reforestation</a>
              </li>
              <li>
                <a href="#clean-water" className="text-gray-400 hover:text-green-500 transition-colors duration-300">Clean Water</a>
              </li>
              <li>
                <a href="#renewable-energy" className="text-gray-400 hover:text-green-500 transition-colors duration-300">Renewable Energy</a>
              </li>
              <li>
                <a href="#waste-reduction" className="text-gray-400 hover:text-green-500 transition-colors duration-300">Waste Reduction</a>
              </li>
              <li>
                <a href="#education" className="text-gray-400 hover:text-green-500 transition-colors duration-300">Environmental Education</a>
              </li>
              <li>
                <a href="#community" className="text-gray-400 hover:text-green-500 transition-colors duration-300">Community Initiatives</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                123 Green Street
              </li>
              <li>
                Eco City, EC 12345
              </li>
              <li>
                United States
              </li>
              <li>
                <a href="mailto:info@step4eco.org" className="hover:text-green-500 transition-colors duration-300">info@step4eco.org</a>
              </li>
              <li>
                <a href="tel:+15551234567" className="hover:text-green-500 transition-colors duration-300">+1 (555) 123-4567</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Step4Eco. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#privacy" className="text-gray-500 hover:text-green-500 text-sm transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#terms" className="text-gray-500 hover:text-green-500 text-sm transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#cookie" className="text-gray-500 hover:text-green-500 text-sm transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;