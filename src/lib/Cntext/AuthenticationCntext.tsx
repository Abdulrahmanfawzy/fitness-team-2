import { useState, createContext } from "react";
import type { ReactNode } from "react";

interface AuthContextType {
  isLogedIn: boolean;
  setIsLogedIn: React.Dispatch<React.SetStateAction<boolean>>;
}
interface AuthProviderProps {
  children: ReactNode;
}

const AuthenticationCntext = createContext<AuthContextType | undefined>(
  undefined,
);

export function AuthenticationCntextProvider({ children }: AuthProviderProps) {
  const [isLogedIn, setIsLogedIn] = useState(
    localStorage.getItem("token") != null,
  );

  return (
    <AuthenticationCntext.Provider value={{ isLogedIn, setIsLogedIn }}>
      {children}
    </AuthenticationCntext.Provider>
  );
}

export default AuthenticationCntext;
