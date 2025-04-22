import Carousel from "react-elastic-carousel";
import { productsJson } from "../../../utils/data";
import { MdFastfood } from "react-icons/md";
import ProductCard from "../menu/components/ProductCard";

export default function ProductsSlider() {
  const breakPoints = [
    { width: 1, itemsToShow: 1 }, // smallest screens
    { width: 480, itemsToShow: 2 }, // phones
    { width: 768, itemsToShow: 4 }, // tablets
    { width: 1024, itemsToShow: 5 }, // small laptops
  ];

  return (
    <div>
      <div className="flex items-center gap-3">
        <span className="text-logoColor sm:text-[50px] text-[30px] ">
          <MdFastfood />
        </span>
        <h1 className="mb-2 font-bold sm:text-[40px] text-[30px]  my-5 text-Color900">
          Products
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
        {productsJson?.map((item, index) => (
          <ProductCard item={item} key={index} />
        ))}
      </Carousel>
    </div>
  );
}
