import React, { useState, useEffect } from 'react';
import { Menu, X, Leaf } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Programs', href: '#programs' },
    { name: 'Impact', href: '#impact' },
    { name: 'Resources', href: '#resources' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="px-12 container mx-auto  flex justify-between items-center">
        <a href="#home" className="flex items-center space-x-2">
          <Leaf className={`h-6 w-6 ${scrolled ? 'text-green-600' : 'text-white'}`} />
          <span className={`font-bold text-xl ${scrolled ? 'text-green-600' : 'text-white'}`}>
            Step4Eco
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`transition-colors hover:text-green-400 ${
                scrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#join"
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full transition-colors duration-300"
          >
            Join Us
          </a>
        </div>

        {/* Mobile Navigation Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className={`h-6 w-6 ${scrolled ? 'text-gray-700' : 'text-white'}`} />
          ) : (
            <Menu className={`h-6 w-6 ${scrolled ? 'text-gray-700' : 'text-white'}`} />
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-green-600"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#join"
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full text-center transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              Join Us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;