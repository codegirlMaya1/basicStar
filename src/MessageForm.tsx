"use client";


export function MessageForm() {
  return (
    <form className="flex flex-col mt-12 w-full text-xs font-medium max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-wrap gap-10 leading-loose max-md:max-w-full">
        <div className="flex flex-col flex-1 grow shrink-0 basis-0 text-neutral-400 w-fit">
          <label htmlFor="firstName" className="self-start">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            className="mt-9 w-full border-b border-gray-300"
          />
        </div>
        <div className="flex flex-col flex-1 grow shrink-0 text-black basis-0 w-fit">
          <label htmlFor="lastName" className="self-start">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            className="mt-9 w-full border-b border-gray-300"
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-10 mt-11 leading-loose max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col flex-1 grow shrink-0 whitespace-nowrap basis-0 text-neutral-400 w-fit">
          <label htmlFor="email" className="self-start">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="mt-9 w-full border-b border-gray-300"
          />
        </div>
        <div className="flex flex-col flex-1 grow shrink-0 text-black basis-0 w-fit">
          <label htmlFor="phone" className="self-start">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            className="mt-9 w-full border-b border-gray-300"
          />
        </div>
      </div>

      <fieldset className="mt-11 max-md:mt-10">
        <legend className="self-start text-sm font-semibold leading-none text-black">
          Select Subject?
        </legend>
        <div className="flex flex-wrap gap-7 self-start mt-5 leading-loose text-black">
          <label className="flex gap-2.5 cursor-pointer">
            <input
              type="radio"
              name="subject"
              value="general"
              className="hidden"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/bf31f4b7e42d50ce88b5e13e1b27dc9f9a62a464?placeholderIfAbsent=true&apiKey=03e3c575566b4bc08e40e1aed06e4ab4"
              alt=""
              className="object-contain shrink-0 self-start mt-1 aspect-square w-[13px]"
            />
            <span>General Inquiry</span>
          </label>
          <label className="flex gap-2.5 cursor-pointer">
            <input
              type="radio"
              name="subject"
              value="technical"
              className="hidden"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/de06e7d9aa3d3fbc951620817f9ac5c3c93f450b?placeholderIfAbsent=true&apiKey=03e3c575566b4bc08e40e1aed06e4ab4"
              alt=""
              className="object-contain shrink-0 self-start mt-1 aspect-square w-[13px]"
            />
            <span>General Inquiry</span>
          </label>
          <label className="flex gap-2.5 cursor-pointer">
            <input
              type="radio"
              name="subject"
              value="billing"
              className="hidden"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ce3a1f69e6db9418506e92ece3654d35017e7033?placeholderIfAbsent=true&apiKey=03e3c575566b4bc08e40e1aed06e4ab4"
              alt=""
              className="object-contain shrink-0 self-start mt-1 aspect-square w-[13px]"
            />
            <span>General Inquiry</span>
          </label>
          <label className="flex gap-2.5 cursor-pointer">
            <input
              type="radio"
              name="subject"
              value="other"
              className="hidden"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/57d816e8bc4cd9d874a77368b7f34d80ed313ea0?placeholderIfAbsent=true&apiKey=03e3c575566b4bc08e40e1aed06e4ab4"
              alt=""
              className="object-contain shrink-0 self-start mt-1 aspect-square w-[13px]"
            />
            <span>General Inquiry</span>
          </label>
        </div>
      </fieldset>

      <label
        htmlFor="message"
        className="self-start mt-12 leading-loose text-neutral-400 max-md:mt-10"
      >
        Message
      </label>
      <textarea
        id="message"
        placeholder="Write your message.."
        className="mt-4 w-full h-32 border-b border-gray-300 resize-none text-sm text-neutral-400"
      />

      <button
        type="submit"
        className="gap-2.5 self-end px-12 py-4 mt-11 text-base text-center text-white bg-orange-600 rounded-md shadow-[0px_0px_14px_rgba(0,0,0,0.12)] max-md:px-5 max-md:mt-10 max-md:mr-1.5"
      >
        Send Message
      </button>
    </form>
  );
}
export default MessageForm;