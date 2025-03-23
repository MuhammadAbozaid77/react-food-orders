import Wrapper from "../../../components/ui/Wrapper";
import FilterOrders from "./FilterOrders";
import OrdersTable from "./OrdersTable";

export default function CheckOrder() {
  return (
    <Wrapper>
      <FilterOrders />
      <OrdersTable />
    </Wrapper>
  );
}
