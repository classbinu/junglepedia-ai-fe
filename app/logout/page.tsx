"use client";

import { AuthContext } from "@/contexts/AuthContext";
import { useContext } from "react";
import { useRouter } from 'next/navigation'

export default function LogoutPage() {
  const router = useRouter();
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

  sessionStorage.removeItem("accessToken");
  sessionStorage.removeItem("refreshToken");
  setIsLoggedIn(false);

  router.push("/");
}
