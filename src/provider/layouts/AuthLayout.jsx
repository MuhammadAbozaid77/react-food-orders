import { Outlet } from "react-router-dom";
import backGround from "../../assets/backGround.jpg";
import advert3 from "../../assets/advert/advert3.jpg";

export default function AuthLayout() {
  return (
    <div className="relative h-screen flex justify-center items-center bg-gray-300 p-5">
      {/* Background image with opacity */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30 z-0"
        style={{ backgroundImage: `url(${backGround})` }}
      />
      {/* Content on top */}
      <div className="relative z-10 w-full max-w-md">
        <Outlet />
      </div>
    </div>
  );
}
