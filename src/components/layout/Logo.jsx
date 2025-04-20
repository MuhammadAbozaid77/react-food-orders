import logoImage from "./../../assets/mainLogo.png";
export default function Logo({ style, type }) {
  return (
    <div
      className={`h-[80px]  flex justify-center items-center  ${style} ${
        type === "admin" ? "bg-red-600" : ""
      }`}
    >
      <img className="w-[120px]" src={logoImage} alt="" />
    </div>
  );
}
