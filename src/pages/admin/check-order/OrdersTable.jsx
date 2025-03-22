import { useSearchParams } from "react-router-dom";

export default function OrdersTable() {
  const [searchParams] = useSearchParams();
  const filteredValue = searchParams.get("order-status") || "all";

  let data = [
    {
      company: "Mac Donalds",
      status: "completed",
      history: "September 16, 2021",
      order: [{}],
    },
    {
      company: "Dominos",
      status: "preparing",
      history: "September 16, 2021 ",
      order: [{}],
    },
    {
      company: "Dominos",
      status: "completed",
      history: "September 16, 2021 ",
      order: [{}],
    },
    {
      company: "Dominos",
      status: "onTheWay",
      history: "September 16, 2021 ",
      order: [{}],
    },
    {
      company: "Dominos",
      status: "completed",
      history: "September 16, 2021 ",
      order: [{}],
    },
  ];

  let filteredData;

  filteredData;
  data?.filter((el) => el.status === "all");
  filteredData;
  data?.filter((el) => el.status === "completed");
  filteredData;
  data?.filter((el) => el.status === "onTheWay");
  filteredData;
  data?.filter((el) => el.status === "preparing");

  return <div></div>;
}
