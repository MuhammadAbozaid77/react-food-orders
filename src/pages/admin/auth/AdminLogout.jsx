import { useNavigate } from "react-router-dom";
import { IoMdLogOut } from "react-icons/io";
import { MdLogout } from "react-icons/md";
import toast from "react-hot-toast";
import { useState } from "react";

export default function AdminLogout() {
  const navigate = useNavigate();
  const [loadingLogout, setLoadingLogout] = useState(false);
  const handelLogout = () => {
    setLoadingLogout(true);
    localStorage.removeItem("foodOrderUsers");
    navigate("/admin-login", { replace: true });
    toast.success("Logout Successfuly");
    
    setLoadingLogout(false);

    // Ensures all state is cleared
    // window.location.reload();
  };

  return (
    <div
      onClick={handelLogout}
      className=" p-2 bg-red-700  text-white rounded-full flex justify-center items-center cursor-pointer"
    >
      <MdLogout size={25} />
      {loadingLogout ? <Spinner size={""} disabled={loadingLogout} /> : ""}
    </div>
  );
}
