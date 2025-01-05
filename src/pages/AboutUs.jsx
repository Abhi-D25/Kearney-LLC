import React from 'react';
import './AboutUs.css';
import AboutImage from '../assets/images/About.jpg';
import Landscape2 from '../assets/images/landscape2.avif';

function AboutUs() {
  return (
    <div className="about-us-container" style={{
      backgroundImage: `url(${Landscape2})`,
      minHeight: '100vh',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      paddingTop: '60px', // Add padding to account for fixed navbar
      paddingBottom: '60px', // Add padding to account for fixed footer
    }}>
      {/* Left Side: Scrollable Description in Rounded Box */}
      <div className="about-us-description">
        <div className="description-box">
          <h1>Robert Connor Kearney</h1>
          <section>
            <h4>
              Robert Connor Kearney, Developer – Management<br />
              {/* Founder of Kearney Developments LLC<br />
              Partner and Head of Operations – Kearney and Obanion Construction and Consulting Inc. */}
            </h4>
            <h2> Master of the Universe </h2>
          </section>

          <section>
            <h2>Experience and Expertise</h2>
            <p>
              Robert Kearney is Partner and Head of Operations at Kearney and Obanion Inc., 
              a family-owned General Contracting and Consulting firm operating across California. 
              For over 40 years, they have been renovating and building high-end residential homes and 
              apartment buildings in the San Francisco/Bay Area. Kearney and Obanion also serve as a top 
              legal consulting firm in California, investigating construction-related legal matters such as 
              cost analysis, water intrusion, HOA disputes, construction defects, fire loss, and habitability 
              issues in apartments.
            </p>
          </section>

          <section>
            <h2>Career Journey</h2>
            <p>
              While attending UC Davis, Robert worked as an inspector and technician under 
              Robert Mault, a top expert in building envelopes in the Bay Area. During this time, he inspected 
              hundreds of residential homes, commercial apartment buildings, and condos, conducting water 
              intrusion investigations.
            </p>
            <p>
              After college, Robert joined his family firm as a partner, helping grow revenues by 80% 
              year over year. In addition to managing construction projects, Robert works with industry experts 
              to investigate various aspects of construction. He has personally bid over $50M in construction for 
              legal cases and has published numerous reports on defective construction with code analysis.
            </p>
          </section>

          <section>
            <h2>Education and Achievements</h2>
            <p>
              Robert holds a degree in Mechanical Engineering from the University of California and has 
              experience in nearly every facet of the construction industry, including inspection, investigation, 
              project management, litigation, and settlement of disputes. His recent projects include 2712 Broadway, 
              the most expensive home sold in San Francisco to date.
            </p>
          </section>
        </div>
      </div>

      {/* Right Side: Fixed Image with Hover Effect */}
      <div className="about-us-image-frame">
        <div className="image-container">
          <img src={AboutImage} alt="Robert Connor Kearney" />
          <div className="hover-overlay">
            <a href="mailto:robertcwkearney@gmail.com">Email Me</a>
            <a href="tel:+1234567890">Call Me</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
