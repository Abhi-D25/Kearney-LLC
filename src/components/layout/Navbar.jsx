import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Insights', path: '/insights' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link 
              to="/" 
              className={`text-2xl font-bold ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}
            >
              Kearney Developments
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`
                  px-3 py-2 rounded-md text-sm font-medium transition-colors
                  ${location.pathname === link.path
                    ? 'text-blue-600'
                    : isScrolled
                      ? 'text-gray-900 hover:text-blue-600'
                      : 'text-white hover:text-blue-400'
                  }
                `}
              >
                {link.name}
              </Link>
            ))}
            <button 
              className={`
                px-4 py-2 rounded-full text-sm font-medium border-2 transition-colors duration-300
                ${isScrolled
                  ? 'border-white bg-blue text-white-600 hover:bg-white hover:text-blue-600'  // White button with blue text when scrolled
                  : 'border-white text-white hover:bg-white hover:text-gray-900' // White button with black text on hover when transparent
                }
              `}
            >
              Contact Us
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`
                block px-3 py-2 rounded-md text-base font-medium
                ${location.pathname === link.path
                  ? 'text-blue-600 bg-blue-50'
                  : 'text-gray-900 hover:text-blue-600 hover:bg-blue-50'
                }
              `}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <button className="w-full mt-4 px-3 py-2 text-center rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors">
              Contact Us
            </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;