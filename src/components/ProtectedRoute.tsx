
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { ReactNode } from "react";

interface ProtectedRouteProps {
  children?: ReactNode;
  requiredRole?: 'student' | 'tutor' | undefined;
}

export const ProtectedRoute = ({ children, requiredRole }: ProtectedRouteProps) => {
  const { user, isAuthenticated } = useAuth();
  const location = useLocation();

  // If not authenticated, redirect to login
  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // If role specific route and user doesn't have the required role
  if (requiredRole && user?.role !== requiredRole) {
    return <Navigate to="/" replace />;
  }

  // For tutor that hasn't completed onboarding, redirect to tutor onboarding
  if (user?.role === 'tutor' && !user.hasCompletedOnboarding && location.pathname !== '/tutor-onboarding') {
    return <Navigate to="/tutor-onboarding" replace />;
  }

  // For tutor that hasn't completed test, redirect to test
  if (user?.role === 'tutor' && user.hasCompletedOnboarding && !user.hasCompletedTest && location.pathname !== '/tutor-test') {
    return <Navigate to="/tutor-test" replace />;
  }

  return children ? <>{children}</> : <Outlet />;
};

export default ProtectedRoute;
