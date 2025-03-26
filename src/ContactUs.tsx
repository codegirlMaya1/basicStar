"use client";
import { ContactInformation } from "./ContactInformation";
import { MessageForm } from "./MessageForm"; // Ensure this module exists

export function ContactForm() {
  return (
    <section className="py-2.5 pr-12 pl-2.5 mt-14 max-w-full bg-white rounded-xl shadow-2xl w-[1196px] max-md:pr-5 max-md:mt-10">
      <div className="flex gap-5 max-md:flex-col">
        <div className="w-[45%] max-md:ml-0 max-md:w-full">
          <ContactInformation />
        </div>
        <div className="ml-5 w-[55%] max-md:ml-0 max-md:w-full">
          <MessageForm />
        </div>
      </div>
    </section>
  );
}

export default ContactForm;