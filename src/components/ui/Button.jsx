import { IoMdAdd } from "react-icons/io";
import { MdOutlineAddBox } from "react-icons/md";
import { MdAddToPhotos } from "react-icons/md";

export default function Button({
  children,
  disabled,
  onClick,
  style,
  type,
  icon,
}) {
  const iconType = icon === "add" ? <MdAddToPhotos size={25} /> : "";
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      type={type}
      className={`flex justify-between text-[18px] items-center border px-3 py-2 rounded-[5px] border-transparent bg-red-700 hover:bg-red-600  transition-all duration-300 text-white font-semibold cursor-pointer ${style}`}
    >
      <span>{children}</span>
      <span className="text-white mx-2">{iconType}</span>
    </button>
  );
}
