import { useSearchParams } from "react-router-dom";
import SelectdOptions from "./SelectdOptions";

export default function SortingBy({ options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentField = searchParams.get("sortedBy") || "";
  const selectedOption =
    options.find((option) => option.value === currentField) || null;

  const handelChange = (e) => {
    searchParams.set("sortedBy", e?.value);
    setSearchParams(searchParams);
  };

  return (
    <div className="w-[250px]">
      <SelectdOptions
        options={options}
        onChange={handelChange}
        defaultValue={selectedOption}
      />
    </div>
  );
}
