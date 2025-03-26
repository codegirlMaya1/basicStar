"use client";

import * as React from "react";

interface TalentCardProps {
  backgroundImage: string;
  overlayImage: string;
}

const TalentCard: React.FC<TalentCardProps> = ({
  backgroundImage = "Rectangle 72.png",
  overlayImage = "Rectangle 72.png",
}) => {
  return (
    <article className="shadow-md max-w-[285px]">
      <figure className="flex relative flex-col pb-36 w-full rounded-3xl aspect-[0.772]">
        <img
          src={backgroundImage}
          alt="Talent background"
          className="object-cover absolute inset-0 size-full"
        />
        <img
          src={overlayImage}
          alt="Talent overlay"
          className="object-contain -mb-7 w-full rounded-3xl aspect-[1.26]"
        />
      </figure>
    </article>
  );
};

export default TalentCard;
