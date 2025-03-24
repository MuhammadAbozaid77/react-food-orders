import Wrapper from "../../../components/ui/Wrapper";
import { productsJson } from "../../../utils/data";
import ProductItem from "./ProductItem";
import ProductsFilter from "./ProductsFilter";

export default function Products() {
  return (
    <>
      <Wrapper>  <ProductsFilter/> </Wrapper>
      <Wrapper>
        <div className="flex gap-3 flex-wrap lg:justify-start justify-center mt-[30px]">
          {productsJson?.map((item, index) => (
            <ProductItem item={item} key={index} />
          ))}
        </div>
      </Wrapper>
    </>
  );
}
