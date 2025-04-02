import Logo from "./Logo";
import { sideBarNavData } from "../../utils/AdminLinksIcons.jsx";
import { NavLink } from "react-router-dom";

export default function AdminSideBar({ className }) {
  return (
    <div className={className}>
      <Logo />
      <ul className="py-2 px-[30px] mt-[25px] flex flex-col gap-1">
        {sideBarNavData?.map((el, index) => (
          <li
            key={index}
            className="p-1 text-gray-500 font-semibold text-[20px] capitalize"
          >
            <NavLink
              className={({ isActive }) =>
                `flex items-center gap-3 ${isActive ? "text-orange-500" : ""}`
              }
              to={el.href}
            >
              <span>{el?.icon}</span>
              <span>{el?.name}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
