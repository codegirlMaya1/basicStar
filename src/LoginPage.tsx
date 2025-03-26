"use client";
import * as React from "react";
import { LoginForm } from "./LoginForm";
import { SignUpForm } from "./SignUpForm";

export default function LogInPage() {
  const [showSignUp, setShowSignUp] = React.useState(false);

  const handleSignUpClick = () => {
    setShowSignUp(true);
  };

  const handleLoginClick = () => {
    setShowSignUp(false);
  };

  return (
    <main className="overflow-hidden pr-20 bg-white max-md:pr-5">
      <div className="flex gap-5 max-md:flex-col">
        {showSignUp ? (
          <img src="src/Signup.jpg" alt="Sign Up" className="w-1/2" />
        ) : (
          <img src="src/LoginArt.png" alt="Login" className="w-1/2" />
        )}
        <div className="w-1/2">
          {showSignUp ? (
            <SignUpForm onLoginClick={handleLoginClick} />
          ) : (
            <LoginForm onSignUpClick={handleSignUpClick} />
          )}
        </div>
      </div>
    </main>
  );
}