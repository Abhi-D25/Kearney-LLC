import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <a href="mailto:robertcwkearney@gmail.com" 
                 className="flex items-center hover:text-blue-400">
                <Mail className="w-5 h-5 mr-2" />
                robertcwkearney@gmail.com
              </a>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                +1 (707) 555-1234
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                California, USA
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-blue-400">Home</Link></li>
              <li><Link to="/about" className="hover:text-blue-400">About</Link></li>
              <li><Link to="/projects" className="hover:text-blue-400">Projects</Link></li>
              <li><Link to="/insights" className="hover:text-blue-400">Insights</Link></li>
            </ul>
          </div>

          {/* Projects */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Projects</h3>
            <ul className="space-y-2">
              <li><Link to="/projects/ukiah" className="hover:text-blue-400">Ukiah Development</Link></li>
              <li><Link to="/projects/petaluma" className="hover:text-blue-400">Petaluma Project</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Stay Updated</h3>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500"
              />
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p>&copy; {currentYear} Real Estate Development. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;