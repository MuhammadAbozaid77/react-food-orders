import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoCloseCircleOutline } from "react-icons/io5";

export default function SearchComponent() {
  const [searchText, setSearchText] = useState("");

  return (
    <div className="my-[50px] flex justify-center items-center p-2 ">
      <div className=" bg-white w-[700px] flex justify-between items-center p-1 rounded-2xl shadow">
        <div className=" bg-white p-2 rounded cursor-pointer">
          <CiSearch size={30} />
        </div>
        <input
          onChange={(e) => setSearchText(e?.target?.value)}
          placeholder="Search For Your Best Food"
          value={searchText}
          type="text"
          name=""
          id=""
          className=" p-2 bg-white w-full focus:outline-none text-[18px] text-gray-500"
        />
        <div
          className=" bg-white p-2 rounded cursor-pointer text-red-500"
          onClick={() => setSearchText("")}
        >
          <IoCloseCircleOutline size={30} />
        </div>
      </div>
    </div>
  );
}
