import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import Button from '../components/common/Button';
import '../assets/images/landscape1.avif';

import UkiahImage from '../assets/images/Ukiah.png';
import BGImage from '../assets/images/landscape1.avif';

const Home = () => {
  const stats = [
    { label: 'Projects Completed', value: '10+' },
    { label: 'Houses Inspected', value: '100+' },
    { label: 'Years Experience', value: '15+' },
    { label: 'Happy Clients', value: '50+' }
  ];

  return (
    <div className="min-h-screen">
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src={BGImage}
            alt="Modern development"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60" />
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Kearney Developments
            <span className="block text-4xl md:text-5xl text-blue-400 mt-4">
              Creating Lasting Value
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-12 max-w-5xl mx-auto">
            Transforming visions into reality through innovative development and sustainable design
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              variant="primary"
              className="group flex items-center justify-center"
              onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Our Projects
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline"
              className="group flex items-center justify-center"
            >
              Contact Us
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <ChevronDown className="w-8 h-8 absolute top-[100%] md:top-[200%] left-1/2 -translate-x-1/2 animate-bounce" />
        </div>
      </section>
      <section className="py-20 bg-gray-50" id="stats">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20" id="projects">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Ukiah Project */}
            <div className="group relative overflow-hidden rounded-xl shadow-lg">
              <div className="relative h-96">
                <img 
                  src={UkiahImage}
                  alt="Ukiah Development"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-4 py-1 rounded-full text-sm">
                  In Progress
                </div>
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-2xl font-semibold mb-2">Ukiah Development</h3>
                <p className="text-gray-600 mb-4">
                  Luxury living spaces with sustainable design
                </p>
                <Button variant="secondary" size="sm">
                  Learn More 
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Petaluma Project */}
            <div className="group relative overflow-hidden rounded-xl shadow-lg">
              <div className="relative h-96">
                <img 
                  src="/api/placeholder/800/600"
                  alt="Petaluma Project"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm">
                  Planning
                </div>
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-2xl font-semibold mb-2">Petaluma Project</h3>
                <p className="text-gray-600 mb-4">
                  Future community development opportunity
                </p>
                <Button variant="secondary" size="sm">
                  Learn More 
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;