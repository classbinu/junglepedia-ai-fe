"use client";

import React, { useEffect, useState } from "react";

import { AppContext } from "./AppContext";

export const AppProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const accessToken = sessionStorage.getItem("accessToken");
    if (accessToken) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <AppContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </AppContext.Provider>
  );
};
