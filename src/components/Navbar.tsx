import React, { useState, useEffect } from 'react';
import { Menu, X, Leaf, Home, Info, Briefcase, Mail } from 'lucide-react';

// Main component for the Floating Navbar
const FloatingNavbar: React.FC = () => {
  // State to track if the page has been scrolled
  const [scrolled, setScrolled] = useState(false);
  // State for the mobile menu visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Effect to handle scroll events for changing navbar background
  useEffect(() => {
    const handleScroll = () => {
      // Set scrolled to true if user scrolls more than 10px
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    // Cleanup the event listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu if window is resized to a desktop view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  const navLinks = [
    { name: 'Home', href: '#home', icon: Home },
    { name: 'About', href: '#about', icon: Info },
    { name: 'Programs', href: '#programs', icon: Briefcase },
    { name: 'Contact', href: '#contact', icon: Mail },
  ];

  return (
    <>
      {/* Main Navbar Container */}
      <nav className="fixed top-5 inset-x-4 sm:inset-x-6 md:inset-x-10 lg:inset-x-24 z-50">
        <div
          className={`relative flex items-center text-white rounded-full px-5 py-3 transition-colors duration-300 ease-in-out ${
            scrolled ? 'bg-neutral-900/80 backdrop-blur-xl shadow-2xl shadow-black/30' : 'bg-transparent'
          }`}
        >
          {/* Logo & Brand Name (Left Aligned) */}
          <a href="#home" className="flex items-center space-x-3 z-10">
            <Leaf className="h-8 w-8 text-green-400" />
            <span className="font-bold text-2xl tracking-wide">Step4Eco</span>
          </a>

          {/* Desktop Navigation (Center Aligned) */}
          <div className="hidden md:flex items-center space-x-2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="flex items-center space-x-2 px-4 py-2 rounded-full text-base font-medium hover:bg-white/10 transition-colors"
              >
                <link.icon className="h-4 w-4" />
                <span>{link.name}</span>
              </a>
            ))}
          </div>

          {/* CTA and Mobile Toggle (Right Aligned) */}
          <div className="flex items-center space-x-4 ml-auto z-10">
            <a
              href="#contact"
              className="hidden md:block bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-full transition-colors duration-300 text-base font-semibold"
            >
              Contact Us
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-white rounded-full hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-green-400/50"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Panel */}
      <div 
        className={`fixed md:hidden inset-x-4 sm:inset-x-6 top-24 z-40 transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10 pointer-events-none'
        }`}
      >
        <div className="bg-neutral-900/95 backdrop-blur-xl rounded-2xl p-5 shadow-2xl shadow-black/30">
          <div className="container mx-auto flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="flex items-center space-x-3 text-white hover:bg-white/10 p-3 rounded-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <link.icon className="h-5 w-5 text-green-400" />
                <span className="font-medium text-lg">{link.name}</span>
              </a>
            ))}
            <div className="border-t border-white/20 pt-4 mt-2">
              <a
                href="#contact"
                className="bg-green-600 hover:bg-green-700 text-white w-full block text-center px-4 py-3 rounded-lg font-semibold transition-colors duration-300 text-base"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FloatingNavbar;

