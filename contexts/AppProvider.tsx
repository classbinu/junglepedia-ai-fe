"use client";

import React, { useEffect, useState } from "react";

import { AppContext } from "./AppContext";

export const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [offset, setOffset] = useState(0);
  const [posts, setPosts] = useState([]);
  const [allDataLoaded, setAllDataLoaded] = useState(false);

  const [myOffset, setMyOffset] = useState(0);
  const [myPosts, setMyPosts] = useState([]);
  const [myAllDataLoaded, setMyAllDataLoaded] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    const checkAuth = async () => {
      const accessToken = sessionStorage.getItem("accessToken");
      if (accessToken) {
        setIsLoggedIn(true);
      }
    };
    checkAuth();

    setIsLoading(false);
  }, []);

  const clearAllData = () => {
    setOffset(0);
    setPosts([]);
    setAllDataLoaded(false);

    setMyOffset(0);
    setMyPosts([]);
    setMyAllDataLoaded(false);
  };

  return (
    <AppContext.Provider
      value={{
        isLoading,
        setIsLoading,

        isLoggedIn,
        setIsLoggedIn,
        offset,
        setOffset,
        posts,
        setPosts,
        allDataLoaded,
        setAllDataLoaded,

        myOffset,
        setMyOffset,
        myPosts,
        setMyPosts,
        myAllDataLoaded,
        setMyAllDataLoaded,

        clearAllData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
