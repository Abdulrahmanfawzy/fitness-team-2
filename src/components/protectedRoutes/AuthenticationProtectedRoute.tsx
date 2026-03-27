interface RouteProps {
  children: React.ReactNode;
}

import { Navigate } from "react-router-dom";
import { useContext } from "react";
import AuthenticationCntext from "@/lib/Cntext/AuthenticationCntext";

function AuthenticationProtectedRoute({ children }: RouteProps) {
  let { isLogedIn } = useContext(AuthenticationCntext);
  return isLogedIn ? <Navigate to={"/"} /> : children;
}

export default AuthenticationProtectedRoute;
