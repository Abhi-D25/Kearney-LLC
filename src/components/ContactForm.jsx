import React from 'react';
import './contact-form.css';

function ContactForm() {
  return (
    <form className="contact-form">
      <h2>Contact Us</h2>
      <input type="text" placeholder="Your Name" required />
      <input type="email" placeholder="Your Email" required />
      <textarea placeholder="Your Message" required></textarea>
      <button type="submit">Send</button>
    </form>
  );
}

export default ContactForm;
