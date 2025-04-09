import { CiMenuBurger } from "react-icons/ci";
import AdminLogout from "./../../pages/admin/auth/AdminLogout";

export default function AdminLayoutHeader({ setSideBarStatus }) {
  const handelButtonClick = () => {
    setSideBarStatus((prev) => !prev);
  };

  return (
    <div className="h-[80px] bg-white shadow-md flex justify-between items-center px-[50px]">
      <div className="" onClick={handelButtonClick}>
        <CiMenuBurger size={25} className="cursor-pointer" />
      </div>
      <AdminLogout />
    </div>
  );
}
