import { Outlet } from "react-router-dom";
import LayoutHeader from "../../components/layout/LayoutHeader";
import LayoutSidebar from "../../components/layout/LayoutSidebar";

export default function Layout() {
  return (
    <div className="max-h-[100vh]  flex  justify-between ">
      <LayoutSidebar />

      <div className="bg-Color100 ">
        <LayoutHeader />
        <div className="px-[40px]">
          <Outlet />
        </div>
      </div>

      <div className="min-w-[400px] h-[100vh] bg-white">ddd</div>
    </div>
  );
}
