import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

const links = [
  { name: "navbar.home", path: "" },
  { name: "navbar.menu", path: "menu" },
];

export default function Navbar() {
  const { t } = useTranslation();
  return (
    <div className="flex justify-center items-center gap-3 rounded-2xl">
      {links.map((el) => (
        <NavLink
          key={el.path}
          to={`/${el.path}`}
          className={({ isActive }) =>
            isActive
              ? "text-Color100 bg-logoColor  rounded-lg px-3 py-1 font-bold text-[16px] "
              : " text-Color900 rounded-lg p-1 font-bold text-[16px]"
          }
        >
          {t(el.name)}
        </NavLink>
      ))}
    </div>
  );
}
