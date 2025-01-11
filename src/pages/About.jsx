import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Button from '../components/common/Button';
import Card from '../components/common/Card';

import BGImage from '../assets/images/landscape3.avif';
import vision from '../assets/images/visionPH.jpeg';
import Connor from '../assets/images/connor.jpg';
import Steve from '../assets/images/architect.jpg';
import placeholder from '../assets/images/wplaceholder.jpeg';
import kevin from '../assets/images/kevin.jpeg';


const TeamMember = ({ member, isSelected, onClick, onMouseEnter, onMouseLeave }) => {
  return (
    <div className="flex flex-col items-center">
      <div
        className={`relative group cursor-pointer transition-transform duration-300 ${
          isSelected ? 'scale-110' : 'hover:scale-105'
        }`}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <div className="w-60 h-60 rounded-full overflow-hidden border-4 border-white shadow-lg">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium whitespace-nowrap">
          {member.name}
        </div>
      </div>

      <div className={`
        mt-6 bg-white rounded-xl shadow-xl p-6 w-96 transform transition-all duration-300
        ${isSelected 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 -translate-y-4 pointer-events-none'
        }
      `}>
        <h3 className="text-xl font-bold mb-2">{member.name}</h3>
        <p className="text-gray-600 mb-2">{member.role}</p>
        <p className="text-gray-800">{member.bio}</p>
      </div>
    </div>
  );
};

const AboutUs = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [hoveredMember, setHoveredMember] = useState(null);

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

  const teamMembers = [
    {
      id: 1,
      name: "Connor Kearney",
      role: "CEO & Founder",
      image: Connor,
      bio: "Pussy, Power and Prosperity"
    },
    {
      id: 2,
      name: "Steve Andrews",
      role: "Head of Architecture",
      image: Steve,
      bio: "Old ass nig who i still don't knwo what he looks like and I need a better picture of him"
    },
    {
      id: 3,
      name: "Daddy Dutta",
      role: "Tech Guru",
      image: "/api/placeholder/200/200",
      bio: "Wealth, Wisdom and Women. Ws only"
    },
    {
      id: 4,
      name: "Master Kevin",
      role: "Investment Director",
      image: kevin,
      bio: "Had to include my master"
    },
    {
      id: 5,
      name: "Naielle",
      role: "Starbucks barista",
      image: placeholder,
      bio: "Naielle ensures there's a little love in your coffee"
    },
    {
      id: 6,
      name: "Your mom",
      role: "Development Manager",
      image: placeholder,
      bio: "the GOAT, hope she's been doing well"
    }
  ];

  const scrollToTeam = () => {
    document.getElementById('team-section').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50">
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
          <div className="absolute bottom-(-8) left-4 mt-20" >
            <Button 
              variant="outline" 
              onClick={scrollToTeam}
              className="flex items-center gap-2"
            >
              Meet the Team
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
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
              <Link to="/projects">
              <Button variant="primary" className="flex items-center">
                View Our Projects <ArrowRight className="ml-2" />
              </Button>
              </Link>
            </div>
            <div className="relative h-96">
              <img
                src={vision}
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


      {/* Team Section */}
      <section id="team-section" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Experience & Expertise</h2>
            <p className="text-gray-600 text-lg w-200">
              With a background in [relevant experience], we bring a unique perspective 
              to real estate development. Our approach combines industry best practices 
              with innovative solutions to create exceptional value.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-x-8 gap-y-16 justify-items-center mt-20">
            {teamMembers.map((member) => (
              <TeamMember
                key={member.id}
                member={member}
                isSelected={selectedMember === member.id || hoveredMember === member.id}
                onClick={() => {
                  setSelectedMember(selectedMember === member.id ? null : member.id);
                  setHoveredMember(null);
                }}
                onMouseEnter={() => {
                  if (!selectedMember) {
                    setHoveredMember(member.id);
                  }
                }}
                onMouseLeave={() => {
                  if (!selectedMember) {
                    setHoveredMember(null);
                  }
                }}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;