import * as React from "react";
import LoginArt from "./LoginArt.png";

export const BackgroundSection: React.FC = () => {
  return (
    <div className="w-1/2 h-full">
      <img
        src={LoginArt}
        alt="Background"
        className="object-cover w-full h-full"
      />
    </div>
  );
};

export default BackgroundSection;
