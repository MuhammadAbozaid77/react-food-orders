import { useSearchParams } from "react-router-dom";
import Wrapper from "../../../components/ui/Wrapper";
import MapSelect from "./MapSelect";
import Button from "../../../components/ui/Button";

export default function OrderCart() {
  const [searchParams, setSearchParams] = useSearchParams();

  const handelSetLocation = () => {
    setSearchParams({ lat: "2222", lon: "15" });
  };

  return (
    <Wrapper>
      <div>OrderCart</div>

      <Button onClick={handelSetLocation}> handel Location</Button>

      <MapSelect />
    </Wrapper>
  );
}
