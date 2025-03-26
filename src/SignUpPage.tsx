"use client";

import { LeftSection } from "./LeftSection";
import { SignUpForm } from "./SignUpForm";

export function SignUpPage() {
  const handleLoginClick = () => {
    // Logic to navigate to the login page
  };

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Lato:wght@400&family=Roboto:wght@400&display=swap"
        rel="stylesheet"
      />
      <main className="flex overflow-hidden mx-auto w-full max-w-none h-screen max-md:flex-col max-md:max-w-[991px] max-sm:max-w-screen-sm">
        <LeftSection />
        <section className="flex flex-1 justify-center items-center p-10 right-[section] max-md:p-5">
          <SignUpForm onLoginClick={handleLoginClick} />
        </section>
      </main>
    </>
  );
}

export default SignUpPage;