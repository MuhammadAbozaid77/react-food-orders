import { FaStar } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import SmallMenu from "../../../components/ui/SmallMenu";

export default function ProductItem({ item }) {
  return (
    <div>
      <div>
        <img
          class="object-cover object-center w-full h-40 max-w-full rounded-lg"
          src={item.pic}
          alt={item.name}
          className="max-w-full max-h-full object-contain"
        />
      </div>
      <div className="p-5 space-y-3">
        <div className="flex text-gray-300">
          <FaStar size={22} className="text-yellow-500" />
          <FaStar size={22} className="text-yellow-500" />
          <FaStar size={22} />
          <FaStar size={22} />
          <FaStar size={22} />
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
