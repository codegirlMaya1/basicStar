import React from "react";

export const LoginBanner: React.FC = () => {
  return (
    <section className="w-[65%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col pb-11 w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex">
          <div className="flex relative flex-col flex-1 shrink items-start px-16 pt-16 w-full rounded-3xl basis-0 min-h-[1024px] min-w-60 pb-[916px] max-md:px-5 max-md:pb-24 max-md:max-w-full">
            <img
              src={require('./assets/login_art.jpg')}
              alt="Background"
              className="object-cover absolute inset-0 size-full"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/8b4e07f2b37f0a21a6cdbf6735f21b43b265599c?placeholderIfAbsent=true&apiKey=03e3c575566b4bc08e40e1aed06e4ab4"
              alt="Logo"
              className="object-contain max-w-full aspect-[4.35] w-[183px]"
            />
          </div>
        </div>
        <footer className="z-10 self-start mt-0 ml-16 text-base leading-loose text-center text-stone-50 max-md:ml-2.5">
          STAR GIGS © 2025 ALL RIGHTS RESERVED
        </footer>
      </div>
    </section>
  );
};

export default LoginBanner;