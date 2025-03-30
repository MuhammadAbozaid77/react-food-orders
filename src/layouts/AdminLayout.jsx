import { Outlet } from "react-router-dom";
import AdminSideBar from "../components/layout/AdminSideBar";
import AdminLayoutHeader from "../components/layout/AdminLayoutHeader";
import { useState } from "react";

export default function AdminLayout() {
  const [sideBarStatus, setSideBarStatus] = useState(false);

  return (
    <>
      <div className="flex h-[100vh] overflow-hidden relative ">
        {!sideBarStatus ? (
          <AdminSideBar className="bg-white min-w-[250px] h-[100%] lg:block hidden" />
        ) : (
          <></>
        )}

        <main className="bg-[#f8f9fc] w-[100%]">
          <AdminLayoutHeader setSideBarStatus={setSideBarStatus} />
          <div className="p-5">
            <Outlet />
          </div>
        </main>
      </div>
    </>
  );
}
