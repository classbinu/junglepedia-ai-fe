"use client";

import { LoginForm } from "@/components/login/loginForm";

export default function LoginPage() {
  const handleLogin = async (event) => {
    event.preventDefault();

    let email = event.target.email.value;
    let password = event.target.password.value;
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_API}/auth/login`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        }
      );
      const data = await res.json();
      const { accessToken, refreshToken } = data;
      sessionStorage.setItem("accessToken", accessToken);
      sessionStorage.setItem("refreshToken", refreshToken);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex items-center h-screen">
      <LoginForm onSubmit={handleLogin}></LoginForm>
    </div>
  );
}
