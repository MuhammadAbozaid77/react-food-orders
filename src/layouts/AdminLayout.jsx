import { Outlet } from "react-router-dom";
import AdminSideBar from "../components/layout/AdminSideBar";
import AdminLayoutHeader from "../components/layout/AdminLayoutHeader";

export default function AdminLayout() {
  return (
    <>
      <div className="flex h-[100vh] ">
        <AdminSideBar />
        <main className="bg-[#f8f9fc] w-[100%]">
          <AdminLayoutHeader />
          <Outlet />
        </main>
      </div>
    </>
  );
}
