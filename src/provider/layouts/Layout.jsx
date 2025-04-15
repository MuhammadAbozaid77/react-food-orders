import { Outlet } from "react-router-dom";
import Header from "../../components/layout/Header";
import Wrapper from "../../components/ui/Wrapper";
import Container from "./../../components/ui/Container";

export default function Layout() {
  return (
    <>
      <Header />
      <div className="flex justify-between items-start px-[100px] gap-2">
        <div className="flex-2 ">
          <Outlet />
        </div>
        <div className="flex-1 ">
          <Container>fddd</Container>
        </div>
      </div>
    </>
  );
}
