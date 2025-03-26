"use client";

export const NavigationLinks: React.FC = () => {
  return (
    <div className="flex gap-8 items-center max-md:gap-5 max-sm:hidden">
      <button className="px-0 py-3.5 text-base text-stone-50 bg-black">
        Reviews
      </button>
      <button className="px-0 py-3.5 text-base text-stone-50 bg-black">
        About
      </button>
    </div>
  );
};

export default NavigationLinks;