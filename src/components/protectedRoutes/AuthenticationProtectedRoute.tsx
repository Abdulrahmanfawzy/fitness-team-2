interface RouteProps {
  children: React.ReactNode;
}

function AuthenticationProtectedRoute({ children }: RouteProps) {
  return children;
}

export default AuthenticationProtectedRoute;
