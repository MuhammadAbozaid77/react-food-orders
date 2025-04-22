import { FaStar, FaPlus, FaHeart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addItem } from "../../order-cart/slice-services/cartSlice";

export default function ProductCard({ item }) {
  const disPatch = useDispatch();
  const handelAddItemToCart = () => {
    const newItem = {
      id: item.id,
      name: item.name,
      quantity: 1,
      unitPrice: item.price,
      totalPrice: item.price * 1,
    };

    disPatch(addItem(newItem));
  };
  return (
    <div className=" h-[100%]  mx-2 rounded-2xl overflow-hidden relative bg-[#ebd7bd] border border-Color200">
      <div className="absolute top-[10px] right-[10px] z-[30]">
        <FaHeart size={30} className="text-gray-600" />
      </div>
      <div className="h-[200px] p-3 bg-white">
        <img
          className="object-contain object-center w-full h-[170px] max-w-full rounded-lg transition-transform duration-300 hover:scale-[1.2]"
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
          <span className="text-[25px] font-bold text-gray-600">
            {item.price}
          </span>
          <button
            onClick={handelAddItemToCart}
            className="bg-logoColor text-white p-2 rounded-[10px] hover:bg-orange-700 cursor-pointer"
          >
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
