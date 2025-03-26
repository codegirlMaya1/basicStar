"use client";
import React from "react";
import TwoColumnLayout from "./TwoColumnLayout";
import { SignUpForm } from "./SignUpForm";

const RegisterPage: React.FC = () => {
  const leftContent = (
    <img src="src/Signup.jpg" alt="Sign Up" className="object-cover rounded-3xl size-full" />
  );

  return (
    <TwoColumnLayout
      leftContent={leftContent}
      rightContent={<SignUpForm onLoginClick={() => { /* Navigate to login page */ }} />}
    />
  );
};

export default RegisterPage;