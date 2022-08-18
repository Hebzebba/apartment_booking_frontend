import { useLocation, Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  let location = useLocation();
  if (
    localStorage.getItem("user_email") === null &&
    localStorage.getItem("user_name") === null
  ) {
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }
  return children;
};

export default ProtectedRoute;
