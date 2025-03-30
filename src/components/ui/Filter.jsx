import { useSearchParams } from "react-router-dom";
import Button from "./Button";

export default function Filter({ filteredField, options }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleClick = (e) => {
    searchParams.set(filteredField, e.value);
    setSearchParams(searchParams);
  };

  const currentButton = searchParams.get(filteredField) || options?.[0].value;

  return (
    <div className="gap-1 flex  border border-gray-300 h-[50px] p-1 rounded">
      {options?.map((el, index) => (
        <Button
          key={index}
          //   style={"bg-red-700 hover:bg-red-600 text-white"}
          onClick={() => handleClick(el)}
          color={"red"}
          active={el.value === currentButton ? "bg-red-700 text-white" : ""}
          disabled={el.value === currentButton}
        >
          {el?.name}
        </Button>
      ))}
    </div>
  );
}
