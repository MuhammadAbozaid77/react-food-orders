import { useForm } from "react-hook-form";
import FormLayout from "././../../../components/ui/FormLayout";
import Button from "../../../components/ui/Button";
import Input from "../../../components/ui/Input";
import GridContainer from "../../../components/ui/GridContainer";
export default function AddNewCategoryForm() {
  const { handleSubmit, register } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <FormLayout onSubmit={handleSubmit(onSubmit)}>
      <FormLayout.Header>Add New Category </FormLayout.Header>
      <FormLayout.Body>
        <GridContainer>
          <Input
            label={"categoryNameArabic"}
            type="text"
            {...register("categoryNameArabic")}
            placeholder={"placeholder"}
          />
          <Input
            label={"categoryNameEnglish"}
            type="text"
            {...register("categoryNameEnglish")}
            placeholder={"placeholder"}
          />
        </GridContainer>
        <Input label={"image"} type="file" />
      </FormLayout.Body>
      <FormLayout.Footer>
        <Button type="submit">Submit</Button>
      </FormLayout.Footer>
    </FormLayout>
  );
}
