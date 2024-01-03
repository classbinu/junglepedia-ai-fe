"use client";

import { AppContext } from "@/contexts/AppContext";
import { useContext } from "react";
import { useRouter } from "next/navigation";

export default function LogoutPage() {
  const router = useRouter();
  const { isLoggedIn, setIsLoggedIn } = useContext(AppContext);

  sessionStorage.removeItem("accessToken");
  sessionStorage.removeItem("refreshToken");
  setIsLoggedIn(false);

  router.push("/");
}
