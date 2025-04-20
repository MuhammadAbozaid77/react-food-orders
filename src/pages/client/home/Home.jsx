import { useTranslation } from "react-i18next";
import Wrapper from "../../../components/ui/Wrapper";
import HomeSlider from "./HomeSlider";
import CategorySlider from "./CategorySlider";
import ProductsSlider from "./ProductsSlider";
import Advertisements from "./Advertisements";

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="flex justify-between w-[100%] gap-5">
      <div className=" w-[100%]">
        <Wrapper>
          <HomeSlider />
        </Wrapper>
        {/* <Wrapper style={"p-5"}>
          <CategorySlider />
        </Wrapper> */}
        <Wrapper style={"p-5 "}>
          <ProductsSlider />
        </Wrapper>
      </div>
      <Advertisements />
    </div>
  );
}
