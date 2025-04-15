import Carousel from "react-elastic-carousel";
import { categoriesData } from "../../../utils/data";
import CategoryItem from "../../admin/menu-products/CategoryItem";
import { MdFastfood } from "react-icons/md";

export default function CategorySlider() {
  const breakPoints = [
    { width: 1, itemsToShow: 1 }, // smallest screens
    { width: 480, itemsToShow: 2 }, // phones
    { width: 768, itemsToShow: 3 }, // tablets
    { width: 1024, itemsToShow: 6 }, // small laptops
  ];

  return (
    <div>
      <div className="flex items-center gap-5">
        <span className="text-red-600 sm:text-[60px] text-[45px] ">
          <MdFastfood />
        </span>
        <h1 className="mb-2 font-bold sm:text-[40px] text-[30px]  my-5 text-gray-700">
          Categories
        </h1>
      </div>

      <Carousel
        breakPoints={breakPoints}
        itemsToShow={5}
        pagination={false}
        showArrows={false}
        enableAutoPlay={true}
        autoPlaySpeed={3000} // You can adjust the interval
        transitionMs={700} // Smooth transition duration
        infinite={true} // Optional: keep sliding in loop
      >
        {categoriesData?.map((item, index) => (
          <CategoryItem item={item} key={index} />
        ))}
      </Carousel>
    </div>
  );
}
