import { IoMdAdd } from "react-icons/io";

export default function Button({
  children,
  disabled,
  onClick,
  style,
  type,
  active,
}) {
  const iconType = type === "add" ? <IoMdAdd size={25} /> : "";

  const typeStyle =
    type === "submit"
      ? `bg-mainBackColor w-full py-[20px] text-white text-[20px] disabled:bg-orange-200 ${style}`
      : "bg-gray-600  hover:bg-gray-500 hover:text-white text-gray-200";
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      type={type}
      className={`flex justify-center items-center disabled:cursor-not-allowed text-center text-[18px]  py-2 px-5 rounded-[10px] capitalize  transition-all duration-150 font-semibold cursor-pointer  ${typeStyle} ${active}`}
    >
      <span>{children}</span>
      {iconType && <span className=" mx-2">{iconType}</span>}
    </button>
  );
}
