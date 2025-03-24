import Button from "../../../components/ui/Button";
import Modal from "../../../components/ui/Modal";
import AddNewCategoryForm from "./AddNewCategoryForm";

export default function AddNewCategoryModal({onCloseModal}) {
  return (
    <Modal>
      <Modal.Open openName={"AddNewCategoryModal"}>
        <Button> Add New Category </Button>
      </Modal.Open>
      <Modal.Window windowName={"AddNewCategoryModal"}>
        <div className="flex justify-center items-center">
          <AddNewCategoryForm />
        </div>
      </Modal.Window>
    </Modal>
  );
}
