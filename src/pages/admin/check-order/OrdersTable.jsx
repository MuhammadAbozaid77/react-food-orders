import { useSearchParams } from "react-router-dom";
import { orders } from "../../../data/data";
import Table from "../../../components/ui/Table";
import OrdersTableRow from "./OrdersTableRow";
import EmptyTable from "../../../components/ui/EmptyTable";

export default function OrdersTable() {
  const [searchParams] = useSearchParams();
  const filteredValue = searchParams.get("order-status") || "all";

  let filteredData;
  if (filteredValue === "all") {
    filteredData = orders;
  }
  if (filteredValue === "onTheWay") {
    filteredData = orders.filter((el) => {
      return el?.status === filteredValue;
    });
  }
  if (filteredValue === "preparing") {
    filteredData = orders.filter((el) => {
      return el?.status === filteredValue;
    });
  }
  if (filteredValue === "completed") {
    filteredData = orders.filter((el) => {
      return el?.status === filteredValue;
    });
  }

  // const sortedBy = searchParams.get("sortedBy") || "startDate-asc";
  // const [field, direction] = sortedBy.split("-");
  // const modifier = direction === "asc" ? 1 : -1;
  // const sortedData = filteredData?.sort(
  //   (a, b) => (a[field] - b[field]) * modifier
  // );

  const headRow = [
    { colName: "name" },
    { colName: "history" },
    { colName: "order" },
    { colName: "company" },
    { colName: "status" },
  ];

  if (orders?.length === 0) {
    return <EmptyTable />;
  }
  return (
    <>
      {/* {sortedData &&
        sortedData?.map((el, index) => (
          <div
            className="border p-2 bg-gray-100 font-semibold capitalize text-[20px] mb-1 rounded-md "
            key={index}
          >
            {el.company}
          </div>
        ))} */}

      <Table>
        <Table.Header>
          <Table.Row>
            {headRow?.map((el, index) => (
              <Table.Head key={index}> {el.colName} </Table.Head>
            ))}
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {filteredData?.map((el, index) => (
            <OrdersTableRow key={index} row={el} />
          ))}
        </Table.Body>
      </Table>
    </>
  );
}
