import { FaDatabase } from "react-icons/fa";

export default function EmptyTable() {
  return (
    <div className="flex flex-col justify-center items-center py-[50px]">
      <FaDatabase size={100} className="text-gray-400" />
      <h1 className="text-[30px] font-bold text-gray-500"> No Data Founded </h1>
    </div>
  );
}
