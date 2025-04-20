import { Outlet } from "react-router-dom";
import back1 from "../../assets/advert/advert6.png";
import back3 from "../../assets/back3.jpg";

export default function AuthLayout() {
  return (
    <div className="relative h-screen flex justify-center items-center bg-gray-300 p-5 overflow-hidden">
      {/* Background image with full cover */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50 z-0"
        style={{ backgroundImage: `url(${back3})` }}
      />

      {/* Content on top */}
      <div className="relative z-10 w-full max-w-md">
        <Outlet />
      </div>
    </div>
  );
}
