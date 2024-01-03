"use client";

import { createContext } from "react";

interface AppContextType {
  isLoggedIn: boolean;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
}

export const AppContext = createContext<AppContextType>({
  isLoggedIn: false,
  setIsLoggedIn: () => {},
});
