import React, { useState } from "react";

import { AuthContext } from "@/contexts/AuthContext";

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => {
    // 실제 로그인 로직 구현
    // 예: API 요청, 상태 업데이트 등
    setIsLoggedIn(true);
  };

  const logout = () => {
    // 실제 로그아웃 로직 구현
    // 예: 상태 업데이트, 로컬 스토리지 클리어 등
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
