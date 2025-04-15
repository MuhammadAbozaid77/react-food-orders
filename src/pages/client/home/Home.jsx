import { useTranslation } from "react-i18next";
import Wrapper from "../../../components/ui/Wrapper";
import HomeSlider from "./HomeSlider";
import CategorySlider from "./CategorySlider";
import ProductsSlider from "./ProductsSlider";

export default function Home() {
  const { t } = useTranslation();

  return (
    <>
      <Wrapper>
        <HomeSlider />
      </Wrapper>
      <Wrapper style={"p-5"}>
        <CategorySlider />
      </Wrapper>
      <Wrapper style={"p-5"}>
        <ProductsSlider />
      </Wrapper>
    </>
  );
}
