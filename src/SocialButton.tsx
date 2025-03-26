"use client";

import * as React from "react";

interface SocialButtonProps {
  /**
   * The URL of the social icon image
   */
  imageUrl: string;
  /**
   * Alternative text for the image
   */
  alt: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
  /**
   * Optional aria-label for the button
   */
  ariaLabel?: string;
}

const SocialButton: React.FC<SocialButtonProps> = ({
  imageUrl,
  alt,
  onClick,
  ariaLabel,
}) => {
  return (
    <button
      className="social-button flex gap-4 justify-center items-center px-2.5 py-3 rounded-xl border border-solid border-zinc-300"
      onClick={onClick}
      aria-label={ariaLabel}
    >
      <img
        src={imageUrl}
        alt={alt}
        className="object-contain self-stretch my-auto w-7 aspect-square"
      />
    </button>
  );
};

export default SocialButton;