import Navbar from "./Navbar";
import Logo from "./Logo";
import { FaHeart, FaShoppingCart, FaUserAlt } from "react-icons/fa";

export default function Header() {
  // const { cart } = useSelector((state) => state.cart);

  // console.log(cart);

  return (
    <div className="flex w-[100%] justify-between px-[50px] items-center bg-Color200  h-[80px]">
      <Logo type={""} />
      <Navbar />
      <div className="flex justify-between items-center gap-2">
        <div>
          <div className="flex justify-center items-center cursor-pointer relative">
            <div className="absolute -top-[15px] -right-[5px] w-[25px] h-[25px] rounded-full font-bold flex justify-center items-center bg-gray-500 text-white">
              {/* {cart?.length} */}
            </div>

            <div className="bg-logoColor text-Color100 rounded-lg p-[8px]">
              <FaHeart size={22} />
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-center items-center cursor-pointer relative">
            <div className="absolute -top-[15px] -right-[5px] w-[25px] h-[25px] rounded-full font-bold flex justify-center items-center bg-gray-500 text-white">
              {/* {cart?.length} */}
            </div>
            <div className="bg-logoColor text-Color100 rounded-lg p-[8px]">
              <FaShoppingCart size={22} />
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-center items-center  cursor-pointer">
            <div className="bg-logoColor text-Color100 rounded-lg p-[8px]">
              <FaUserAlt size={22} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
