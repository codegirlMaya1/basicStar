"use client";

import * as React from "react";
import { FormInput } from "./FormInput";
import { SubjectSelector } from "./SubjectSelector";

export const ContactFormInputs: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex-1 px-16 py-10 max-md:w-full max-sm:p-5"
    >
      <div className="flex gap-10 mb-10 max-md:flex-col">
        <FormInput label="First Name" type="text" />
        <FormInput label="Last Name" type="text" />
      </div>

      <div className="flex gap-10 mb-10 max-md:flex-col">
        <FormInput label="Email" type="email" />
        <FormInput label="Phone Number" type="tel" />
      </div>

      <SubjectSelector />

      <div className="flex flex-col gap-2.5 mb-10">
        <FormInput
          label="Message"
          type="textarea"
          placeholder="Write your message.."
        />
      </div>

      <button
        type="submit"
        className="float-right px-12 py-4 text-base font-medium text-white bg-orange-600 rounded-md shadow-sm cursor-pointer border-[none] max-sm:w-full"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactFormInputs;
