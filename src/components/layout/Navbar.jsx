import { Link } from "react-router-dom";
import Button from "../ui/Button";

export default function Navbar() {
  return (
    <div className="p-5 flex justify-center items-center gap-1 h-[80px] border-b border-gray-200">
      <Link to={"/"}>
        <Button color={"slate"}>Home</Button>
      </Link>
      <Link to={"/check-order"}>
        <Button color={"slate"}>Check Order</Button>
      </Link>
    </div>
  );
}
