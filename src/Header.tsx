"use client";

import React from 'react';
import { useNavigate } from 'react-router-dom';
import SecondSearchBar from './SecondSearchBar';
import { NavigationLinks } from './NavigationLinks';
import { AuthButtons } from './AuthButtons';
import './header.css'; // Import the header.css file

const Header: React.FC = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleSignUpClick = () => {
    navigate('/signup');
  };

  return (
    <header className="flex justify-center items-center px-8 py-4 w-full bg-gray-950 h-[70px] max-md:px-6 max-md:py-3 max-sm:px-4 max-sm:py-2 max-sm:h-[60px]">
      <nav className="flex justify-between items-center w-full">
        <div className="flex justify-center items-center px-0 py-1.5">
          <img
            src="src/Logo.png"
            className="h-[30px] w-[130px] max-md:h-[25px] max-md:w-[110px] max-sm:h-[20px] max-sm:w-[90px]"
            alt="Star Gigs Logo"
          />
        </div>
        <div className="flex gap-12 items-center max-md:gap-8 max-sm:gap-4">
          <SecondSearchBar />
          <NavigationLinks />
          <AuthButtons onLoginClick={handleLoginClick} onSignUpClick={handleSignUpClick} />
        </div>
      </nav>
    </header>
  );
};

export default Header;