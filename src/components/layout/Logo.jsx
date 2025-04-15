import logoImage from "./../../assets/logo.png";
export default function Logo({ style }) {
  return (
    <div className={`h-[80px] bg-red-600  flex justify-center items-center  ${style}`}>
      <img className="w-[120px]" src={logoImage} alt="" />
    </div>
  );
}
