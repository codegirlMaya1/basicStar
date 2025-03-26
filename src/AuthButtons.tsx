"use client";

interface AuthButtonsProps {
  onLoginClick: () => void;
  onSignUpClick: () => void;
}

export const AuthButtons: React.FC<AuthButtonsProps> = ({ onLoginClick, onSignUpClick }) => {
  return (
    <div className="flex gap-3.5 justify-end items-center max-sm:gap-2">
      <button className="px-9 py-4 text-base rounded-lg bg-black h-[49px] text-stone-50 max-sm:px-5 max-sm:py-3 max-sm:text-sm" onClick={onSignUpClick}>
        Sign Up
      </button>
      <button className="px-9 py-4 text-base bg-orange-600 rounded-lg h-[49px] text-stone-50 max-sm:px-5 max-sm:py-3 max-sm:text-sm" onClick={onLoginClick}>
        Log In
      </button>
    </div>
  );
};

export default AuthButtons;