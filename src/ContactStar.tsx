import React from 'react';
import Header from './Header';
import ContactForm from './ContactForm';
import ContactInformation from './ContactInformation';

const ContactStar: React.FC = () => {
  return (
    <div>
      <Header />
      <main style={{ padding: '20px' }}>
        <h2 style={{ textAlign: 'center', padding: '20px 0', fontWeight: 'bold' }}>Contact Us</h2>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ flex: '0 0 48%' }}>
            <ContactForm />
          </div>
          <div style={{ flex: '0 0 48%' }}>
            <ContactInformation />
          </div>
        </div>
      </main>
    </div>
  );
};

export default ContactStar;