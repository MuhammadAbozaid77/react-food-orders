import { Navigate } from "react-router-dom";

export default function ProtectedRouting({ children }) {
  const savedInLocalStorage = localStorage.getItem("userData");

  if (!savedInLocalStorage) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
