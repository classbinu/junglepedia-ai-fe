"use client";

import { AppContext } from "@/contexts/AppContext";
import { SignupForm } from "@/components/signup/signupForm";
import { useContext } from "react";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const router = useRouter();
  const { isLoggedIn, setIsLoggedIn } = useContext(AppContext);

  const handleSignup = async (event) => {
    event.preventDefault();
    let email = event.target.email.value;
    let password = event.target.password.value;
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_API}/auth/register`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password, isAdmin: true }),
        }
      );
      const data = await res.json();
      if (res.ok) {
        router.push("/login");
      } else {
        alert(data.message);
      }
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
