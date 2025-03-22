import { useSearchParams } from "react-router-dom";
import Button from "../../../components/ui/Button";

export default function FilterOrders() {
  const [searchParams, setSearchParams] = useSearchParams();
  function handelCick(value) {
    searchParams.set("order-status", value);
    setSearchParams(searchParams);
  }

  return (
    <>
      <div className="p-5 gap-1 flex">
        <Button onClick={() => handelCick("all")} color={"red"}>
          All
        </Button>
        <Button onClick={() => handelCick("with")} color={"red"}>
          With
        </Button>
        <Button onClick={() => handelCick("wihout")} color={"red"}>
          WithOut
        </Button>
      </div>
    </>
  );
}
