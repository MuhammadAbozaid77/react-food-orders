import { useSearchParams } from "react-router-dom";

export default function MapSelect() {
  const [searchParams, setSearchParams] = useSearchParams();

  const lat = searchParams.get("lat");
  const lon = searchParams.get("lat");

  return (
    <div>
      <h1> lat : {lat} </h1>
      <h1> lat : {lon} </h1>
    </div>
  );
}
