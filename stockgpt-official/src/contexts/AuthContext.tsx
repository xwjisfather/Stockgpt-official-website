// contexts/AuthContext.tsx
'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, username: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = async (email: string, password: string) => {
    // 测试账号登录
    if (email === 'test@example.com' && password === '123456') {
      setIsAuthenticated(true);
      return;
    }
    throw new Error('邮箱或密码错误');
  };

  const register = async (email: string, password: string, username: string) => {
    // 模拟注册
    if (email && password && username) {
      setIsAuthenticated(true);
      return;
    }
    throw new Error('注册失败，请检查输入信息');
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}