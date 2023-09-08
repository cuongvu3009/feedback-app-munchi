// AuthContext.tsx
import React, { ReactNode, createContext, useContext, useState } from "react";

interface User {
  email: string;
  firstName: string;
  lastName: string;
  level: string;
  publicId: string;
  verifyToken: string;
  refreshToken: string;
}

// Define the context and its initial value (null)
interface AuthContextType {
  user: User | null;
  setUser: (user: User | null) => void;
}

// Create the AuthContext
const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
