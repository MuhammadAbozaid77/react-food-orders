import { FaStar } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

export default function ProductItem({ item }) {
  return (
    <div className=" h-[100%]  mx-2 rounded-2xl overflow-hidden relative bg-[#ebd7bd] border border-Color200">
      <div className="absolute top-[10px] right-[10px]">
        <FaHeart size={30} className="text-gray-600" />
      </div>
      <div className="h-[200px] p-3 bg-white">
        <img
          className="object-contain object-center w-full h-[170px]  max-w-full rounded-lg"
          src={item.pic}
          alt={item.name}
        />
      </div>
      <div className=" p-5  border-t border-gray-300">
        <div className="flex justify-between items-center ">
          <div className="flex text-Color900">
            <FaStar size={22} className="text-orange-600" />
            <FaStar size={22} className="text-orange-600" />
            <FaStar size={22} />
            <FaStar size={22} />
            <FaStar size={22} />
          </div>
        </div>
        <h1 className="text-lg font-bold text-zinc-800 ">{item.name}</h1>
        <div className="flex justify-between items-center">
          <span className="text-[25px] font-bold text-gray-600">55.55</span>
          <button className="bg-logoColor text-white p-2 rounded-[10px] hover:bg-orange-700 cursor-pointer">
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
