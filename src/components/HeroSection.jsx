import React from 'react';
import '../styles/components/hero.css';

function HeroSection({ title, description, image }) {
  return (
    <section className="hero" style={{ backgroundImage: `url(${image})` }}>
      <div className="hero-content">
        <h1>{title}</h1>
        <p>{description}</p>
        <div className="cta-buttons">
          <button>Explore Our Projects</button>
          <button>Get in Touch</button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
