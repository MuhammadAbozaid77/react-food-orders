import { Navigate } from "react-router-dom";

export default function AdminProtectedRouting({ children }) {
  const savedInLocalStorage = localStorage.getItem("foodOrderUsers");

  if (!savedInLocalStorage) {
    return <Navigate to="/admin-login" replace />;
  }

  return children;
}
