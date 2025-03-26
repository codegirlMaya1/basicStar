"use client";

export function LeftSection() {
  return (
    <section className="relative h-full left-[section] w-[860px] max-md:w-full max-md:h-[300px]">
      <img
        src="Signup.jpg"
        alt="Sign Up"
        className="object-cover rounded-3xl size-full"
      />
      <img
        src="Logo1.png"
        alt="Logo"
        className="absolute h-[42px] left-[63px] top-[66px] w-[183px] max-sm:left-5"
      />
      <h1 className="absolute bottom-72 text-4xl font-bold leading-[62px] left-[63px] max-w-[314px] text-stone-50 max-sm:left-5 max-sm:text-3xl">
        Discover & Get Discovered!
      </h1>
      <footer className="absolute bottom-11 text-base leading-7 left-[63px] text-stone-50 max-sm:left-5">
        STAR GIGS © 2025 ALL RIGHTS RESERVED
      </footer>
    </section>
  );
}

export default LeftSection;