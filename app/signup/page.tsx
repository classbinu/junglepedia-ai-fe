"use client";

import { SignupForm } from "@/components/signup/signupForm";

export default function SignupPage() {
  const handleSignup = async (event) => {
    event.preventDefault();
    let email = event.target.email.value;
    let password = event.target.password.value;
    try {
      await fetch(`${process.env.NEXT_PUBLIC_SERVER_API}/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, isAdmin: true }),
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <SignupForm onSubmit={handleSignup}></SignupForm>
    </div>
  );
}
