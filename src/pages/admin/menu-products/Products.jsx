import Wrapper from "../../../components/ui/Wrapper";
import { productsJson } from "../../../utils/data";
import ProductItem from "./ProductItem";
import ProductsFilter from "./ProductsFilter";

export default function Products() {
  return (
    <>
      <Wrapper>
        <ProductsFilter />
      </Wrapper>
      <Wrapper>
        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {productsJson?.map((item, index) => (
            <ProductItem item={item} key={index} />
          ))}
        </div>
      </Wrapper>
    </>
  );
}
