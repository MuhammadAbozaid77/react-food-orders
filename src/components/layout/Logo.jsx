import logoImage from "./../../assets/logo.png";
export default function Logo({ style }) {
  return (
    <div
      className={`h-[80px]  bg-mainBackColor flex justify-center items-center shadow ${style}`}
    >
      <img className="w-[120px]" src={logoImage} alt="" />
    </div>
  );
}
