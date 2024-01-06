"use client";

import { useContext, useEffect } from "react";

import { AppContext } from "@/contexts/AppContext";
import { useRouter } from "next/navigation";

export default function LogoutPage() {
  const router = useRouter();
  const { isLoggedIn, setIsLoggedIn } = useContext(AppContext);

  useEffect(() => {
    sessionStorage.removeItem("accessToken");
    sessionStorage.removeItem("refreshToken");
    setIsLoggedIn(false);

    router.push("/");
  }, [router, setIsLoggedIn]);
}
