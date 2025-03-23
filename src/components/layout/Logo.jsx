import logoImage from "./../../assets/logo.png";
export default function Logo() {
  return (
    <div className="h-[80px]  flex justify-center items-center shadow">
      <img className="w-[120px]" src={logoImage} alt="" />
    </div>
  );
}
