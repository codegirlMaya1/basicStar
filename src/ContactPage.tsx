import React from 'react';
import { NavigationHeader } from './NavigationHeader';
import ContactForm from './ContactForm'; // Correct the import statement
import ContactInformation from './ContactInformation'; // Correct the import statement
import Footer from './Footer'; // Correct the import statement

export const ContactPage: React.FC = () => {
  return (
    <main className="flex flex-col bg-zinc-50 min-h-screen">
      <NavigationHeader />
      <section className="flex flex-col items-center px-32 py-16 max-md:px-16 max-sm:px-5">
        <h1 className="mb-6 text-4xl font-bold text-black">Contact Us</h1>
        <p className="mb-14 text-lg text-neutral-500">
          Any question or remarks? Just write us a message!
        </p>
        <div className="grid grid-cols-2 gap-5 w-full max-md:grid-cols-1">
          <ContactInformation />
          <ContactForm />
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default ContactPage;