import GridFour from "../../../components/ui/GridFour";
import Wrapper from "../../../components/ui/Wrapper";
import { productsJson } from "../../../utils/data";
import ProductItem from "../../admin/menu-products/ProductItem";

export default function Menu() {
  return (
    <Wrapper>
      <GridFour>
        {productsJson?.map((item, index) => (
          <ProductItem item={item} key={index} />
        ))}
      </GridFour>
    </Wrapper>
  );
}
