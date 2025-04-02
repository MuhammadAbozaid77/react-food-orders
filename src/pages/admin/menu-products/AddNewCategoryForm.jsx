import { useForm } from "react-hook-form";
import FormLayout from "../../../components/ui/FormLayout";
import Button from "../../../components/ui/Button";
import { t } from "i18next";
import CustomInput from "../../../components/ui/CustomInput";
import CustomSelect from "../../../components/ui/CustomSelect";
import useAddNewOrder from "./../../../hooks/useAddNewOrder";
import Spinner from "./../../../components/ui/Spinner";

export default function AddNewCategoryForm({ dataToEdit, idToEdit }) {
  const isEditingModal = Boolean(idToEdit);
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
    getValues,
  } = useForm({
    defaultValues: isEditingModal ? dataToEdit : {},
  });

  const { mutate, isPending } = useAddNewOrder("oooo");

  const onSubmit = (data) => {
    const ddd = data.imageFile[0];
    mutate({ data, id2: "gggggggg" });
  };

  const onError = (data) => {
    console.log("Errors : ", data); // ✅ Check if this logs data
  };

  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  return (
    <FormLayout onSubmit={handleSubmit(onSubmit, onError)}>
      <FormLayout.Header> {t("menu.addNewCategory")} </FormLayout.Header>
      <FormLayout.Body>
        <CustomInput
          label="userName"
          type="text"
          {...register("userName", {
            required: "userName is required",
          })}
          error={errors.userName?.message}
        />
        <CustomInput
          label="salary"
          type="number"
          {...register("salary", { required: "Username is required" })}
          error={errors.salary?.message}
        />
        <CustomInput
          accept="image/*"
          label="imageFile"
          type="file"
          {...register("imageFile", {
            required: isEditingModal ? false : "Username is required",
          })}
          error={errors.imageFile?.message}
        />
        <CustomSelect
          label="Category"
          options={[
            { value: "electronics", label: "Electronics" },
            { value: "fashion", label: "Fashion" },
            { value: "home", label: "Home" },
          ]}
          {...register("category", { required: "Category is required" })}
          error={errors.category?.message}
        />
      </FormLayout.Body>
      <FormLayout.Footer>
        <Button type="submit">
          {isPending ? <Spinner size={""} /> : ""}{" "}
          {isEditingModal ? "Edit" : "Submit"}
        </Button>
      </FormLayout.Footer>
    </FormLayout>
  );
}
