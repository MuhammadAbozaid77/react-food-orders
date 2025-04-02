import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div className="h-[100vh] flex justify-center items-center bg-gray-200 p-5">
      <Outlet />
    </div>
  );
}
