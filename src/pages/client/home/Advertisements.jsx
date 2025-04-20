import advert2 from "../../../assets/advert/advert2.jpg";
import advert3 from "../../../assets/advert/advert3.jpg";
import advert4 from "../../../assets/advert/advert4.jpg";
import advert5 from "../../../assets/advert/advert5.jpg";

export default function Advertisements() {
  return (
    <div className="lg:w-[400px] h-full lg:flex flex-col gap-1 hidden rounded-md overflow-hidden">
      <img
        src={advert2}
        alt=""
        className="w-full object-cover rounded-lg border-gray-300"
      />
      <img
        src={advert3}
        alt=""
        className="w-full object-cover rounded-lg border-gray-300"
      />
      <img
        src={advert4}
        alt=""
        className="w-full object-cover rounded-lg border-gray-300"
      />
      {/* <img
        src={advert5}
        alt=""
        className="w-full object-cover rounded-lg border-gray-300"
      /> */}
    </div>
  );
}
