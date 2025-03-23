import Button from "../../../components/ui/Button";
import Wrapper from "../../../components/ui/Wrapper";
import { categoriesData } from "../../../utils/data";
import AddNewCategoryModal from "./AddNewCategoryModal";
import CategoryItem from "./CategoryItem";

export default function MenuCategory() {
  return (
    <div className="flex flex-col gap-5">
      <Wrapper>
        <div className="flex justify-end items-center">
          <AddNewCategoryModal />
        </div>
      </Wrapper>
      <Wrapper>
        <div className="flex flex-wrap justify-center lg:justify-start items-stretch gap-5 mt-[30px]">
          {categoriesData?.map((item, index) => (
            <CategoryItem item={item} key={index} />
          ))}
        </div>
      </Wrapper>
    </div>
  );
}
