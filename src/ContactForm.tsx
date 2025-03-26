"use client";
import React, { useState } from 'react';
import './contactform.css'; // Import the CSS file

const ContactForm: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert('Message sent!');
    }, 2000); // Simulate a 2-second loading time
  };

  return (
    <div className="contact-form-container">
      <h4 style={{ textAlign: 'center' }}>We'd love to hear from you!</h4>
      <div className="input-container">
        <div className="styled-input">
          <input type="text" required />
          <label>Name</label>
        </div>
        <div className="styled-input">
          <input type="text" required />
          <label>Email</label>
        </div>
        <div className="styled-input">
          <input type="text" required />
          <label>Phone Number</label>
        </div>
        <div className="styled-input wide">
          <textarea required></textarea>
          <label>Message</label>
        </div>
        <button className="btn-lrg submit-btn" onClick={handleSubmit} disabled={loading}>
          Send Message
        </button>
      </div>
    </div>
  );
};

export default ContactForm;