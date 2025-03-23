export default function CategoryItem({ item }) {
  return (
    <div className="">
      <div className=" border-gray-400 w-[200px]  h-[220px]  rounded-[30px] border hover:bg-gray-100 duration-150 flex flex-col items-center justify-between overflow-hidden cursor-pointer">
        {/* Image Container */}
        <div className="h-[150px] flex justify-center items-center">
          <img src={item.pic} alt="" className="h-[100%] p-3 object-contain" />
        </div>

        {/* Name Container */}
        <div className="w-full flex justify-center  items-center font-bold capitalize text-gray-100 text-[25px] bg-gray-500 hover:bg-red-600 duration-150">
          <h3 className="h-[50px]">{item.name}</h3>
        </div>
      </div>
    </div>
  );
}
