import { FaHome, FaFacebookMessenger } from "react-icons/fa";
import { BiSolidDish } from "react-icons/bi";
import { FaBurger } from "react-icons/fa6";
import { MdRestaurantMenu } from "react-icons/md";

export const sideBarNavData = [
  { name: "dashbord", href: "/dashbord", icon: <FaHome size={25} /> },
  { name: "check order", href: "check-order", icon: <BiSolidDish size={25} /> },
  { name: "products", href: "/products", icon: <FaBurger size={25} /> },
  { name: "menu", href: "menu-category", icon: <MdRestaurantMenu size={25} /> },
  {
    name: "message",
    href: "messages",
    icon: <FaFacebookMessenger size={25} />,
  },
];
