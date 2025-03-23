import { FaHome, FaFacebookMessenger } from "react-icons/fa";
import { BiSolidDish } from "react-icons/bi";
import { FaBurger } from "react-icons/fa6";
import { MdRestaurantMenu } from "react-icons/md";

export const sideBarNavData = [
  { name: "dashbord", href: "/dashbord", icon: <FaHome /> },
  { name: "check order", href: "check-order", icon: <BiSolidDish /> },
  { name: "products", href: "/products", icon: <FaBurger /> },
  { name: "menu", href: "menu-category", icon: <MdRestaurantMenu /> },
  { name: "message", href: "messages", icon: <FaFacebookMessenger /> },
];
