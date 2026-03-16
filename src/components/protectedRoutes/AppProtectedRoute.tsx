interface RouteProps {
  children: React.ReactNode;
}

function AppProtectedRoute({ children }: RouteProps) {
  return children;
}

export default AppProtectedRoute;
