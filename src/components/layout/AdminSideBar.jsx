import { Link } from "react-router-dom";
import Logo from "./Logo";
import { sideBarNavData } from "../../utils/AdminLinksIcons.jsx";

export default function AdminSideBar() {
  return (
    <div className="bg-[#ee4e2c] lg:w-[300px]">
      <Logo />
      <ul className="p-2 flex flex-col gap-1">
        {sideBarNavData?.map((el, index) => (
          <li
            key={index}
            className=" p-1 text-white font-semibold text-[20px] capitalize"
          >
            <Link className="" to={el.href}>
              {el.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
