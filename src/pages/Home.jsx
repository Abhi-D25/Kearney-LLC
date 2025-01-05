import React from 'react';
import HeroSection from '../components/HeroSection';
import './Home.css';
import Landscape1 from '../assets/images/landscape1.avif'

function Home() {
  return (
    <div className="home-container" style={{
      backgroundImage: `url(${Landscape1})`,
      minHeight: '100vh',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      paddingTop: '60px', // Add padding to account for fixed navbar
      paddingBottom: '60px', // Add padding to account for fixed footer
    }}>
      <HeroSection
        title="Building Your Future, One Brick at a Time"
        description="Discover premium real estate opportunities designed with vision and passion."
        image="/images/hero/project1.jpg"
      />
    </div>
  );
}

export default Home;
