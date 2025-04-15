import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="p-5 flex justify-center items-center gap-5  ">
      <Link className="text-white font-semibold text-[20px]" to={"/"}>
        Home
      </Link>
      <Link
        className="text-white font-semibold text-[20px]"
        to={"/check-order"}
      >
        Check-Order
      </Link>
    </div>
  );
}
