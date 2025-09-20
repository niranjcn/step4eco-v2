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
                <a href="#contact" className="text-gray-400 hover:text-green-500 transition-colors duration-300">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-6">Programs</h3>
            <ul className="space-y-3">
              <li>
                <a href="#reforestation" className="text-gray-400 hover:text-green-500 transition-colors duration-300"></a>
              </li>
              <li>
                <a href="#clean-water" className="text-gray-400 hover:text-green-500 transition-colors duration-300">Solar Panel Systems</a>
              </li>
              <li>
                <a href="#renewable-energy" className="text-gray-400 hover:text-green-500 transition-colors duration-300">Wall Insulation</a>
              </li>
              <li>
                <a href="#waste-reduction" className="text-gray-400 hover:text-green-500 transition-colors duration-300">Heat Pumps</a>
              </li>
              <li>
                <a href="#education" className="text-gray-400 hover:text-green-500 transition-colors duration-300">Roof Insulation</a>
              </li>
              
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                15 Monks Walk 
              </li>
              <li>
                The Oval Westshore LL30 2BA
              </li>
              <li>
                United Kingdom
              </li>
              <li>
                <a href="mailto:info.step4eco@gmail.com" className="hover:text-green-500 transition-colors duration-300">info.step4eco@gmail.com</a>
              </li>
              <li>
                <a href="tel:07554463387" className="hover:text-green-500 transition-colors duration-300">+44 7554 463387</a>
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