"use client";
import React from 'react';
import './contactinformation.css'; // Import the CSS file

const ContactInformation: React.FC = () => {
  const handleEmailClick = () => {
    window.location.href = 'mailto:contact@stargigs.com';
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:+10123456789';
  };

  return (
    <div className="contact-info-card">
      <h1>Contact Information</h1>
      <div className="info-item">
        <h4>Address</h4>
        <p>123 Market St. #22B<br />Charlottesville, California 44635</p>
      </div>
      <div className="info-item" onClick={handleEmailClick}>
        <h4>Email</h4>
        <p>contact@stargigs.com</p>
      </div>
      <div className="info-item" onClick={handlePhoneClick}>
        <h4>Phone Number</h4>
        <p>+1012 3456 789</p>
      </div>
      <div className="info-item">
        <h4>Live Chat</h4>
        <button className="live-chat-btn">Click here to start a live chat</button>
      </div>
    </div>
  );
};

export default ContactInformation;