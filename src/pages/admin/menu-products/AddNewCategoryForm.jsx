import { useForm } from "react-hook-form";
import FormLayout from "././../../../components/ui/FormLayout";
import Button from "../../../components/ui/Button";
import Input from "../../../components/ui/Input";
import GridContainer from "../../../components/ui/GridContainer";
import { t } from "i18next";
export default function AddNewCategoryForm() {
  const { handleSubmit, register, formState } = useForm();
  const { errors } = formState;

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <FormLayout onSubmit={handleSubmit(onSubmit)}>
      <FormLayout.Header> {t("menu.addNewCategory")} </FormLayout.Header>
      <FormLayout.Body>
        <GridContainer>
          <Input
            label={"categoryNameArabic"}
            type="text"
            {...register("categoryNameArabic", { required: "ffffff" })}
            placeholder={"placeholder"}
            error={errors?.categoryNameArabic?.message}
          />
          <Input
            label={"categoryNameEnglish"}
            type="text"
            {...register("categoryNameEnglish", {
              pattern: { value: "", message: "" },
              validate: (fieldValue) => {
                if (fieldValue !== "Muhammad") {
                  return "NOOOOOOOO";
                }
              },
            })}
            placeholder={"placeholder"}
            error={errors?.categoryNameEnglish?.message}
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
