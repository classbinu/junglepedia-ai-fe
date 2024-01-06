"use client";

import React, { useEffect, useState } from "react";

import { AppContext } from "./AppContext";

export const AppProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [offset, setOffset] = useState(0);
  const [posts, setPosts] = useState([]);
  const [allDataLoaded, setAllDataLoaded] = useState(false);

  useEffect(() => {
    const accessToken = sessionStorage.getItem("accessToken");
    if (accessToken) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <AppContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        offset,
        setOffset,
        posts,
        setPosts,
        allDataLoaded,
        setAllDataLoaded,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
