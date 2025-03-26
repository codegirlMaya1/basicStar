import * as React from "react";

export const ContactInfo: React.FC = () => {
  return (
    <section className="overflow-hidden relative p-10 text-white bg-black rounded-xl w-[491px] max-md:w-full max-sm:p-5">
      <h2 className="mb-5 text-3xl font-semibold">Contact Information</h2>
      <p className="mb-16 text-base">Say something to start a live chat!</p>

      <div className="flex flex-col gap-10 mb-52">
        <div className="flex gap-5 items-center">
          <i className="ti ti-phone text-2xl" aria-hidden="true" />
          <a href="tel:+10123456789">+1012 3456 789</a>
        </div>

        <div className="flex gap-5 items-center">
          <i className="ti ti-mail text-2xl" aria-hidden="true" />
          <a
            href="mailto:contact@stargigs.com"
            className="underline decoration-orange-600"
          >
            contact@stargigs.com
          </a>
        </div>

        <address className="flex gap-5 items-center not-italic">
          <i className="ti ti-map-pin text-2xl" aria-hidden="true" />
          <div className="text-base leading-normal">
            <span>5123 Market St. #22B</span>
            <br />
            <span>Charlottesville, California 44635</span>
          </div>
        </address>
      </div>

      <footer className="flex absolute bottom-10 left-10 gap-5">
        <a
          href="#"
          className="flex justify-center items-center rounded-full cursor-pointer h-[30px] w-[30px]"
          aria-label="Twitter"
        >
          <i className="ti ti-brand-twitter" aria-hidden="true" />
        </a>
        <a
          href="#"
          className="flex justify-center items-center rounded-full cursor-pointer h-[30px] w-[30px]"
          aria-label="Instagram"
        >
          <i className="ti ti-brand-instagram" aria-hidden="true" />
        </a>
        <a
          href="#"
          className="flex justify-center items-center rounded-full cursor-pointer h-[30px] w-[30px]"
          aria-label="Discord"
        >
          <i className="ti ti-brand-discord" aria-hidden="true" />
        </a>
      </footer>
    </section>
  );
};
export default ContactInfo;