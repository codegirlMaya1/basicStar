import * as React from "react";

export const FooterNavigation: React.FC = () => {
  return (
    <nav className="flex gap-10 mt-2 leading-8">
      <div className="self-end mt-20 opacity-75 max-md:mt-10">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Booking</li>
        </ul>
      </div>
      <div className="flex flex-col">
        <img
          src="src/logo1.png" // Update the image source to logo1.png
          className="object-contain self-end aspect-square w-[52px]"
          alt="Navigation icon"
        />
        <ul className="self-start mt-6 opacity-75">
          <li>Contact</li>
          <li>Reviews</li>
          <li>Talent Acts</li>
        </ul>
      </div>
    </nav>
  );
};
export default FooterNavigation;