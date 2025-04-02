import { IoIosAdd } from "react-icons/io";
import Button from "../../../components/ui/Button";
import Modal from "../../../components/ui/Modal";
import AddNewCategoryForm from "./AddNewCategoryForm";

export default function AddNewCategoryModal() {
  // const [first, setfirst] = useState(second)
  const item = {
    userName: "Muhammad",
    salary: 2500,
    id: 5,
    category: "fashion",
  };
  return (
    <Modal>
      <Modal.Open openName={"AddEditCategoryModal"}>
        <Button type={"add"}> Add New Category </Button>
      </Modal.Open>
      <Modal.Window windowName={"AddEditCategoryModal"}>
        <div className="flex justify-center items-center">
          <AddNewCategoryForm dataToEdit={item} idToEdit={item.id} />
        </div>
      </Modal.Window>
    </Modal>
  );
}
