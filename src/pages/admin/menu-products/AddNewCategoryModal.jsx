import { IoIosAdd } from "react-icons/io";
import Button from "../../../components/ui/Button";
import Modal from "../../../components/ui/Modal";
import AddNewCategoryForm from "./AddNewCategoryForm";

export default function AddNewCategoryModal() {
  return (
    <Modal>
      <Modal.Open openName={"AddNewCategoryModal"}>
        <Button icon={"add"}> Add New Category </Button>
      </Modal.Open>
      <Modal.Window windowName={"AddNewCategoryModal"}>
        <div className="flex justify-center items-center">
          <AddNewCategoryForm />
        </div>
      </Modal.Window>
    </Modal>
  );
}
