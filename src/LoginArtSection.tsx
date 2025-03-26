import * as React from "react";

export const LoginArtSection: React.FC = () => {
  return (
    <section className="relative bg-black h-[1135px] w-[860px] max-md:w-2/5 max-sm:hidden">
      <img
        src="LoginArt.png"
        className="object-cover rounded-3xl size-full"
        alt="Login Art"
      />
      <header className="absolute left-[63px] top-[66px]">
        <img
          src="Logo1.png"
          className="h-[42px] w-[183px]"
          alt="Star Gigs Logo"
        />
      </header>
      <footer className="absolute bottom-11 text-base leading-7 left-[63px] text-stone-50">
        STAR GIGS © 2025 ALL RIGHTS RESERVED
      </footer>
    </section>
  );
};
export default LoginArtSection;
