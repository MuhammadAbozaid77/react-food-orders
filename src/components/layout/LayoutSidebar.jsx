import logo from "./../../assets/mainLogo.png";

export default function LayoutSidebar() {
  return (
    <div className="w-full max-w-[250px] h-[100vh] bg-white ">
      <div className="h-[100px] flex justify-center items-center">
        <img src={logo} alt="logo" className="w-[150px]" />
      </div>
    </div>
  );
}
