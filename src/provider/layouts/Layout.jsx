import { Outlet } from "react-router-dom";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import Advertisements from "../../pages/client/home/Advertisements";

export default function Layout() {
  return (
    <div className="bg-gray-100 min-h-[100vh] flex flex-col justify-between ">
      <Header />
      <div className="flex justify-between items-start xl:px-[150px] lg:px-[80px]   md:p-[50px]   gap-5  p-[10px]  min-h-[calc(100vh-180px)] ">
        <div className="w-[100%] h-[100%]">
          <Outlet />
        </div>
        <Advertisements />
      </div>
      <Footer />
    </div>
  );
}
