import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import { sideBarNavData } from "../../utils/AdminLinksIcons.jsx";

export default function AdminSideBar() {
  return (
    <div className="bg-white lg:w-[350px] h-[100%] md:block hidden">
      <Logo />
      <ul className="py-2 px-[30px] mt-[25px] flex flex-col gap-1">
        {sideBarNavData?.map((el, index) => (
          <li
            key={index}
            className="p-1 text-gray-500 font-semibold text-[20px] capitalize"
          >
            <NavLink
              className={({ isActive }) =>
                `flex items-center gap-3 ${isActive ? "text-red-500" : ""}`
              }
              to={el.href}
            >
              <span>{el?.icon}</span>
              <span>{el?.name}</span>
              {({ isActive }) =>
                isActive && <span className="text-red-500"> ●</span>
              }
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
