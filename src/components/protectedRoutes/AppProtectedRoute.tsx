interface RouteProps {
  children: React.ReactNode;
}
import { Navigate } from "react-router-dom";
import { useContext } from "react";
import AuthenticationCntext from "@/lib/Cntext/AuthenticationCntext";

function AppProtectedRoute({ children }: RouteProps) {
  let { isLogedIn } = useContext(AuthenticationCntext);

  const token = localStorage.getItem("token");
  return isLogedIn || token ? children : <Navigate to={"/login"} />;
}

export default AppProtectedRoute;
