import { useSearchParams } from "react-router-dom";
import Wrapper from "../../../components/ui/Wrapper";
import MapSelect from "./MapSelect";
import Button from "../../../components/ui/Button";
import { useSelector } from "react-redux";
import NoData from "../../../components/ui/NoData";
// import { cartTotalPrice, cartTotalQuantity } from "./slice-services/cartSlice";

export default function OrderCart() {
  // const [searchParams, setSearchParams] = useSearchParams();
  // const handelSetLocation = () => {
  //   setSearchParams({ lat: "2222", lon: "15" });
  // };

  // const cartTotalPriceCount = useSelector(cartTotalPrice);
  // const cartTotalQuantityCount = useSelector(cartTotalQuantity);

  const cartTotalQuantityCount = [];
  if (!cartTotalQuantityCount?.length > 0) {
    return <NoData />;
  }
  return (
    <Wrapper>
      <div>OrderCart</div>

      {/* <Button onClick={handelSetLocation}> handel Location</Button> */}

      {/* <MapSelect /> */}
    </Wrapper>
  );
}
