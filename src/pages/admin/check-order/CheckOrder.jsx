import HeaderContent from "../../../components/ui/HeaderContent";
import Wrapper from "../../../components/ui/Wrapper";
import OrdersTable from "./OrdersTable";
import OrderTableOperations from "./OrderTableOperations";

export default function CheckOrder() {
  return (
    <>
      <Wrapper>
        <HeaderContent>Check Orders</HeaderContent>
      </Wrapper>
      <Wrapper>
        <OrderTableOperations />
        <OrdersTable />
      </Wrapper>
    </>
  );
}
