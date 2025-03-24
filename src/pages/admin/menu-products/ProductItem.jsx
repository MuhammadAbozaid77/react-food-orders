import { FiHeart } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

export default function ProductItem({ item }) {
  return (
    <div className="w-[240px] border border-gray-300 rounded-[5px] shadow ">
      <div className="h-[250px] p-5">
        <img src={item.pic} alt="" />
      </div>
      <div className="p-5">
        <div className="flex ">
          <FaStar size={22} />
          <FaStar size={22} />
          <FaStar size={22} />
          <FaStar size={22} />
        </div>
        <h1 className="text-[20px] font-bold">{item.name}</h1>
        <div className="flex justify-between items-center">
          <span className="text-[25px] font-bold text-red-600 ">55.55</span>
          <span className="bg-red-800 text-white p-2 rounded-[5px] hover:bg-red-700 cursor-pointer">
            <FaPlus size={16} />
          </span>
        </div>
      </div>
    </div>
  );
}
