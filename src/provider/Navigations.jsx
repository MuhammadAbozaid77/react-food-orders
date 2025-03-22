import { Route, Routes } from "react-router-dom";
import Layout from "../layouts/Layout";
import Home from "../pages/home/Home";
import Menu from "../pages/menu/Menu";
import PageNotFound from "./PageNotFound";
import CheckOrder from "../pages/admin/check-order/CheckOrder";
import AdminLayout from "../layouts/AdminLayout";

export default function Navigations() {
  return (
    <>
      <Routes>
        <Route path="*" element={<PageNotFound />} />

        {/* <Route index element={<Navigate replace to="home" />} />
          <Route path="home" element={<Home />} /> */}

        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/menu" element={<Menu />} />
        </Route>
        <Route element={<AdminLayout />}>
          <Route path="/check-order" element={<CheckOrder />} />
        </Route>
      </Routes>
    </>
  );
}
