import { RiUser3Line, RiShoppingCart2Line } from "react-icons/ri";
import Navbar from "./Navbar";
import Logo from "./Logo";

export default function Header() {
  return (
    <div className="flex w-[100%] justify-between px-[50px] items-center bg-white border-b border-gray-200">
      <Logo />
      <Navbar />
      <div className="flex justify-between items-center gap-2">
        <div>
          <div className="flex justify-center items-center cursor-pointer">
            <div className="">
              <RiShoppingCart2Line
                size={35}
                className=" bg-red-700 text-white rounded-md p-1"
              />
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-center items-center cursor-pointer">
            <div className="">
              <RiUser3Line
                size={35}
                className=" bg-red-700 text-white rounded-md p-1"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
