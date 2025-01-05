import React from 'react';
import '../styles/components/footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p>
        Contact Us: <a href="mailto:robertcwkearney@gmail.com">robertcwkearney@gmail.com</a>
      </p>
      <p>© {new Date().getFullYear()} Kearney Developments LLC</p>
    </footer>
  );
}

export default Footer;
