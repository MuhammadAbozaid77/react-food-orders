import { Outlet } from "react-router-dom";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";

export default function Layout() {
  return (
    <div className="bg-Color50 min-h-[100vh] flex flex-col justify-between ">
      <Header />
      <div className="xl:px-[150px] lg:px-[80px]   md:p-[50px]   gap-5  p-[10px]  min-h-[calc(100vh-180px)] ">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
