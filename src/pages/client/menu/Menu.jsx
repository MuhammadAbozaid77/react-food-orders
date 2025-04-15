import Wrapper from "../../../components/ui/Wrapper";
import { productsJson } from "../../../utils/data";

export default function Menu() {
  return (
    <Wrapper>
      <div className="">
        {productsJson.map((el) => (
          <div key={el.id}>
            <h1> {el.name} </h1>
          </div>
        ))}
      </div>
    </Wrapper>
  );
}
