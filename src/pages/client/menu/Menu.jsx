import GridFour from "../../../components/ui/GridFour";
import Wrapper from "../../../components/ui/Wrapper";
import { productsJson } from "../../../utils/data";
import ProductCard from "./components/ProductCard";
import SearchComponent from "./components/SearchComponent";

export default function Menu() {
  return (
    <Wrapper>
      <SearchComponent />
      <GridFour>
        {productsJson?.map((item, index) => (
          <ProductCard item={item} key={index} />
        ))}
      </GridFour>
    </Wrapper>
  );
}
