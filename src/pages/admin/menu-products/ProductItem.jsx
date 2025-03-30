import { FaStar } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import SmallMenu from "../../../components/ui/SmallMenu";

export default function ProductItem({ item }) {
  return (
    <>
      <div className="w-[240px] border border-gray-300 rounded-[5px] shadow relative">
        <div className="h-[250px] p-5">
          <img src={item.pic} alt="" />
        </div>
        <div className="p-5">
          <div className="flex text-gray-300">
            <FaStar size={22} className="text-yellow-500" />
            <FaStar size={22} className="text-yellow-500" />
            <FaStar size={22} />
            <FaStar size={22} />
            <FaStar size={22} />
          </div>
          <h1 className="text-[20px] font-bold text-gray-600">{item.name}</h1>
          <div className="flex justify-between items-center">
            <span className="text-[25px] font-bold text-red-600 ">55.55</span>
            <span className="bg-red-800 text-white p-2 rounded-[5px] hover:bg-red-700 cursor-pointer">
              <FaPlus size={16} />
            </span>
          </div>
        </div>

        <SmallMenu>
          <SmallMenu.Toggle name={item.id} />
          <SmallMenu.List name={item.id}>
            <SmallMenu.Button>Add</SmallMenu.Button>
            <SmallMenu.Button>Edit</SmallMenu.Button>
          </SmallMenu.List>
        </SmallMenu>
      </div>
    </>
  );
}
