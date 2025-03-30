import Filter from "../../../components/ui/Filter";
import SortingBy from "../../../components/ui/SortingBy";

export default function OrderTableOperations() {
  const filterdOptions = [
    {
      name: "all",
      value: "all",
    },
    {
      name: "completed",
      value: "completed",
    },
    {
      name: "preparing",
      value: "preparing",
    },
  ];
  const sortingOptions = [
    {
      label: "Sort By All (A-Z)",
      value: "name-asc",
    },
    {
      label: "Sort By All (Z-A)",
      value: "name-desc",
    },
    {
      label: "Sort By Completed (A-Z)",
      value: "completed-asc",
    },
    {
      label: "Sort By Completed (Z-A)",
      value: "completed-desc",
    },
    {
      label: "Sort By Preparing (A-Z)",
      value: "preparing-asc",
    },
    {
      label: "Sort By Preparing (Z-A)",
      value: "preparing-desc",
    },
    {
      label: "Sort By status (A-Z)",
      value: "status-asc",
    },
    {
      label: "Sort By status (Z-A)",
      value: "status-desc",
    },
  ];

  return (
    <div className="flex  justify-end gap-2 items-center mb-[25px]">
      <Filter options={filterdOptions} filteredField={"order-status"} />
      <SortingBy options={sortingOptions} />
    </div>
  );
}
