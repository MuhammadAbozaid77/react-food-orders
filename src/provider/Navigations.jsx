import { Route, Routes } from "react-router-dom";
import PageNotFound from "./PageNotFound";
import CheckOrder from "../pages/admin/check-order/CheckOrder";
import AdminDashbord from "../pages/admin/dashbord/AdminDashbord";
import Messages from "../pages/admin/messages/Messages";
import MenuCategory from "../pages/admin/menu-products/MenuCategory";
import Products from "../pages/admin/menu-products/Products";
import Home from "../pages/client/home/Home";
import Menu from "../pages/client/menu/Menu";
import OrderCart from "../pages/client/order-cart/OrderCart";
import Layout from "./layouts/Layout";
import AdminLayout from "./layouts/AdminLayout";
import AuthLayout from "./layouts/AuthLayout";
import AdminLogin from "../pages/admin/auth/AdminLogin";

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
          <Route path="/order-cart" element={<OrderCart />} />
        </Route>
        <Route element={<AuthLayout />}>
          {/* <Route index element={<Home />} /> */}
          <Route path="/admin-login" element={<AdminLogin />} />
        </Route>
        <Route element={<AdminLayout />}>
          <Route path="/dashbord" element={<AdminDashbord />} />
          <Route path="/check-order" element={<CheckOrder />} />
          <Route path="/menu-category" element={<MenuCategory />} />
          <Route path="/products" element={<Products />} />
          <Route path="/messages" element={<Messages />} />
        </Route>
      </Routes>
    </>
  );
}
