import Button from "../../../components/ui/Button";
import Modal from "../../../components/ui/Modal";
import AddNewCategoryForm from "./AddNewCategoryForm";

export default function AddNewCategoryModal() {
  return (
    <Modal>
      <Modal.Open openName={"AddNewCategoryModal"}>
        <Button> Add New Category </Button>
      </Modal.Open>
      <Modal.Window windowName={"AddNewCategoryModal"}>
        <AddNewCategoryForm />
      </Modal.Window>
    </Modal>
  );
}
