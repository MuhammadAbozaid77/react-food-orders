import { useForm } from "react-hook-form";
import FormLayout from "../../../components/ui/FormLayout";
import Button from "../../../components/ui/Button";
import { t } from "i18next";
import CustomInput from "../../../components/ui/CustomInput";
import CustomSelect from "../../../components/ui/CustomSelect";

export default function AddNewCategoryForm() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
    },
  });

  const onSubmit = (data) => {
    console.log("Form Data:", data); // ✅ Check if this logs data
  };

  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  return (
    <FormLayout onSubmit={handleSubmit(onSubmit)}>
      <FormLayout.Header> {t("menu.addNewCategory")} </FormLayout.Header>
      <FormLayout.Body>
        {/* <CustomInput
          label="Username"
          type="text"
          {...register("username", { required: "Username is required" })}
          error={errors.username?.message}
        />
        <CustomInput
          label="username2"
          type="password"
          {...register("username2", { required: "Username is required" })}
          error={errors.username2?.message}
        /> */}
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
        <Button type="submit">Submit</Button>
      </FormLayout.Footer>
    </FormLayout>
  );
}
