"use client";
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { LoginInputField } from "./LoginInputField";
import { LoginButton } from "./LoginButton";
import { SocialLogin } from "./SocialLogin";
import './loginform.css'; // Import the CSS file

interface LoginFormProps {
  onSignUpClick: () => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({ onSignUpClick }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLoginClick = () => {
    console.log("Logging in with", email, password);
    // Add your login logic here
    navigate('/contact'); // Navigate to the contact page
  };

  return (
    <div className="form-container">
      <header className="welcome-back w-full text-center mb-8">
        <h1 className="text-5xl font-bold leading-none text-gray-950">
          Welcome Back 👋
        </h1>
        <p className="mt-5 text-xl leading-loose text-neutral-600">
          Connect, collaborate, and find opportunities.
        </p>
      </header>

      <form className="flex flex-col space-y-6 items-center">
        <div className="mt-4 w-full">
          <LoginInputField
            label="Email"
            value={email}
            onChange={setEmail}
            placeholder="johndoe123@gmail.com"
            className="w-full"
          />
        </div>

        <LoginInputField
          label="Password"
          type="password"
          value={password}
          onChange={setPassword}
          error={true}
          className="w-full"
        />

        <button
          type="button"
          className="text-base leading-loose text-center text-white bg-transparent w-full"
          onClick={handleLoginClick}
        >
          Forgot Password?
        </button>

        <LoginButton onClick={handleLoginClick} className="w-full bg-black text-white">
          Log in
        </LoginButton>
      </form>

      <div className="mt-8 text-center w-full">
        <p className="text-neutral-600 mb-4">Sign In / Login with</p>
        <SocialLogin />
      </div>

      <footer className="mt-8 text-lg text-center w-full">
        <span className="text-[#313957]">Don't have an account? </span>
        <button className="text-white bg-black" onClick={onSignUpClick}>Sign Up</button>
      </footer>
    </div>
  );
};

export default LoginForm;