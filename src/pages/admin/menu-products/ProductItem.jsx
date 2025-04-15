import { FaStar } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import SmallMenu from "../../../components/ui/SmallMenu";
import { IoIosHeartEmpty } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";

export default function ProductItem({ item }) {
  return (
    <div className="border h-[100%] w-[250px] mx-2 rounded-2xl border-gray-500 overflow-hidden relative">
      <div className="absolute top-[10px] right-[10px]">
        <FaRegHeart size={30} className="text-red-600" />
      </div>
      <div className="h-[200px]">
        <img
          className="object-contain object-center w-full h-[200px]  max-w-full rounded-lg"
          src={item.pic}
          alt={item.name}
        />
      </div>
      <div className=" p-5 space-y-3 border-t border-gray-300">
        <div className="flex justify-between items-center">
          <div className="flex text-gray-300 ">
            <FaStar size={22} className="text-yellow-500" />
            <FaStar size={22} className="text-yellow-500" />
            <FaStar size={22} />
            <FaStar size={22} />
            <FaStar size={22} />
          </div>
        </div>
        <h1 className="text-lg font-bold text-gray-700">{item.name}</h1>
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold text-red-600">55.55</span>
          <button className="bg-red-800 text-white p-2 rounded-[10px] hover:bg-red-700">
            <FaPlus size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}

{
  /* <SmallMenu>
          <SmallMenu.Toggle name={item.id} />
          <SmallMenu.List name={item.id}>
            <SmallMenu.Button>Add</SmallMenu.Button>
            <SmallMenu.Button>Edit</SmallMenu.Button>
          </SmallMenu.List>
        </SmallMenu> */
}
