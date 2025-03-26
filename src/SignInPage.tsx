"use client";
import React from "react";
import TwoColumnLayout from "./TwoColumnLayout";
import { LoginForm } from "./LoginForm";

const SignInPage: React.FC = () => {
  const leftContent = (
    <img src="src/LoginArt.png" alt="Login" className="object-cover rounded-3xl size-full" />
  );

  return (
    <TwoColumnLayout
      leftContent={leftContent}
      rightContent={<LoginForm onSignUpClick={() => { /* Navigate to sign-up page */ }} />}
    />
  );
};

export default SignInPage;