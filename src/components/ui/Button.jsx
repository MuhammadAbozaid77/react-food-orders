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
  active,
}) {
  const iconType = icon === "add" ? <MdAddToPhotos size={25} /> : "";
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      type={type}
      className={`disabled:cursor-not-allowed text-center text-[18px]  py-1 px-2 rounded-[5px] capitalize  transition-all duration-150 font-semibold cursor-pointer  ${style} ${active}`}
    >
      <span>{children}</span>
      {iconType && <span className="text-white mx-2">{iconType}</span>}
    </button>
  );
}
