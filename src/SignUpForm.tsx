"use client";
import * as React from "react";
import { PasswordInput } from "./PasswordInput";
import { SocialLogin } from "./SocialLogin";
import './signupform.css'; // Import the CSS file

interface SignUpFormProps {
  onLoginClick: () => void;
}

export function SignUpForm({ onLoginClick }: SignUpFormProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="form-container">
      <header className="signup-header mb-8">
        <h2 className="mb-5 text-4xl font-bold leading-[52.2px]">
          <span className="text-gray-950">Join </span>
          <span className="text-gray-950">STAR GIGS</span>
          <span className="text-gray-950">–</span>
        </h2>
        <p className="text-xl leading-8 text-neutral-600">
          To showcase your skills or discover top talent.
        </p>
      </header>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div className="flex flex-col gap-1.5">
          <label className="text-sm leading-5 text-black">Username</label>
          <div className="flex items-center px-4 py-4 bg-white rounded-xl border border-solid border-zinc-300">
            <input
              type="text"
              placeholder="Enter your username"
              className="w-full text-base leading-7 border-none text-black text-opacity-50"
            />
          </div>
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-sm leading-5 text-black">Email</label>
          <div className="flex items-center px-4 py-4 bg-white rounded-xl border border-solid border-zinc-300">
            <input
              type="email"
              placeholder="Example@email.com"
              className="w-full text-base leading-7 border-none text-black text-opacity-50"
            />
          </div>
        </div>
        <PasswordInput
          label="Password"
          placeholder="At least 8 characters"
        />
        <PasswordInput
          label="Confirm Password"
          placeholder="Repeat password"
        />
        <button
          type="submit"
          className="signup-button px-0 py-4 w-full text-base leading-7 text-white bg-black rounded-xl cursor-pointer border-none"
        >
          Sign up
        </button>
        <SocialLogin />
        <div className="mt-6 text-lg leading-7 text-center text-slate-700">
          <span>Already have an account? </span>
          <button type="button" className="text-orange-600 cursor-pointer" onClick={onLoginClick}>
            Log In
          </button>
        </div>
      </form>
    </div>
  );
}
