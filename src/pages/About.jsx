import React from 'react';
import { ArrowRight } from 'lucide-react';
import Button from '../components/common/Button';
import Card from '../components/common/Card';

import BGImage from '../assets/images/landscape3.avif';

const AboutUs = () => {
  const values = [
    {
      title: 'Innovation',
      description: 'Pushing boundaries in sustainable development and modern design'
    },
    {
      title: 'Integrity',
      description: 'Transparent practices and honest relationships with stakeholders'
    },
    {
      title: 'Impact',
      description: 'Creating lasting value for communities and investors'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center">
        <div className="absolute inset-0 bg-black bg-opacity-75">
          <img
            src={BGImage}
            alt="Development site"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative container mx-auto px-4 text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Story</h1>
          <p className="text-xl max-w-2xl">
            Building tomorrow's communities through innovative real estate development
          </p>
        </div>
      </section>


      {/* Vision Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Vision</h2>
              <p className="text-gray-600 mb-6">
                We envision transforming underutilized spaces into thriving communities 
                that blend modern design with sustainable practices. Our commitment to 
                excellence drives us to create developments that stand the test of time.
              </p>
              <Button variant="primary" className="flex items-center">
                View Our Projects <ArrowRight className="ml-2" />
              </Button>
            </div>
            <div className="relative h-96">
              <img
                src="/api/placeholder/800/600"
                alt="Vision"
                className="w-full h-full object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                title={value.title}
                className="hover:shadow-xl transition-shadow"
              >
                <p className="text-gray-600">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team/Experience Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img
                src="/api/placeholder/800/600"
                alt="Team"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl font-bold mb-6">Experience & Expertise</h2>
              <p className="text-gray-600 mb-6">
                With a background in [relevant experience], we bring a unique perspective 
                to real estate development. Our approach combines industry best practices 
                with innovative solutions to create exceptional value.
              </p>
              <Button variant="secondary">
                Contact Us <ArrowRight className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;