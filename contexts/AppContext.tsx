"use client";

import { createContext } from "react";

interface AppContextType {
  isLoggedIn: boolean;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
  offset: number;
  setOffset: Function;
  posts: Array<any>;
  setPosts: Function;
  allDataLoaded: boolean;
  setAllDataLoaded: Function;

  myOffset: number;
  setMyOffset: Function;
  myPosts: Array<any>;
  setMyPosts: Function;
  myAllDataLoaded: boolean;
  setMyAllDataLoaded: Function;

  clearAllData: Function;
}

export const AppContext = createContext<AppContextType>({
  isLoggedIn: false,
  setIsLoggedIn: () => {},
  offset: 0,
  setOffset: () => {},
  posts: [],
  setPosts: () => {},
  allDataLoaded: false,
  setAllDataLoaded: () => {},

  myOffset: 0,
  setMyOffset: () => {},
  myPosts: [],
  setMyPosts: () => {},
  myAllDataLoaded: false,
  setMyAllDataLoaded: () => {},

  clearAllData: () => {},
});
