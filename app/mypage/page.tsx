"use client";

import { decodeToken, getAccessTokenAndValidate } from "@/lib/utils";
import { useContext, useEffect, useState } from "react";

import { AppContext } from "@/contexts/AppContext";
import { MypageForm } from "@/components/mypage/mypageForm";
import { useRouter } from "next/navigation";

export default function MypagePage() {
  const router = useRouter();

  const { isLoading } = useContext(AppContext);
  const { isLoggedIn, setIsLoggedIn } = useContext(AppContext);
  const [user, setUser] = useState(null);

  const handleSignup = async (event) => {
    event.preventDefault();
    let nickname = user.nickname;
    try {
      await fetch(`${process.env.NEXT_PUBLIC_SERVER_API}/users/${user.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nickname }),
      });
      router.push("/");
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const accessToken = await getAccessTokenAndValidate();
        const decodedToken = decodeToken(accessToken);

        const response = await fetch(
          `${process.env.NEXT_PUBLIC_SERVER_API}/users/${decodedToken.sub}`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        const user = await response.json();
        setUser(user);
      } catch (error) {
        console.error(error);
      }
    };

    if (!isLoggedIn && !isLoading) {
      router.push("/login");
      return;
    }
    fetchUser();
  }, [isLoading, isLoggedIn, router, setUser]);

  return (
    <div className="flex justify-center items-center h-screen">
      <MypageForm
        onSubmit={handleSignup}
        user={user}
        setUser={setUser}
      ></MypageForm>
    </div>
  );
}
