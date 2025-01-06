import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

const HeroSection = () => {
  // State for handling the dynamic text animation
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // Dynamic text options that highlight different aspects of the business
  const dynamicText = [
    "Building Tomorrow's Communities",
    "Crafting Sustainable Spaces",
    "Creating Lasting Value"
  ];

  // Effect for handling text rotation
  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentTextIndex((prev) => (prev + 1) % dynamicText.length);
        setIsVisible(true);
      }, 500); // Wait for fade out before changing text
    }, 4000); // Change text every 4 seconds

    return () => clearInterval(interval);
  }, []);

  // Smooth scroll function for the explore button
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen">
      {/* Background image with overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50">
        <img
          src="/api/placeholder/1920/1080"
          alt="Modern development"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content container */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white px-4">
        {/* Main heading with dynamic text */}
        <h1 className="text-5xl md:text-7xl font-bold text-center mb-6">
          <span className="block mb-4">Real Estate Development</span>
          <span 
            className={`block text-4xl md:text-5xl text-blue-400 transition-opacity duration-500 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {dynamicText[currentTextIndex]}
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-xl md:text-2xl text-gray-200 max-w-2xl text-center mb-12">
          Transforming visions into reality through innovative development and sustainable design
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6">
          <button 
            onClick={scrollToProjects}
            className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full flex items-center transition-all duration-300 transform hover:scale-105"
          >
            Explore Our Projects
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button className="group bg-transparent border-2 border-white hover:bg-white/10 text-white px-8 py-3 rounded-full flex items-center transition-all duration-300">
            Contact Us
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white/80" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;