import { Navigate, useLocation } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

export function RequiresAuth({ children }) {
  let location = useLocation();

  const { isUserLoggedIn } = useAuthContext();

  return isUserLoggedIn ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
}
