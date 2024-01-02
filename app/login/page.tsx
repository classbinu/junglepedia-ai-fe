"use client";

import { LoginForm } from "@/components/login/loginForm";

export default function LoginPage() {
  const handleLogin = async (event) => {
    event.preventDefault();
    let email = event.target.email.value;
    let password = event.target.password.value;
    try {
      await fetch("http://localhost:3009/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <LoginForm onSubmit={handleLogin}></LoginForm>
    </>
  );
}
