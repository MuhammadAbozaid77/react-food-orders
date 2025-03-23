import { useForm } from "react-hook-form";
import Input from "../../../components/ui/Input";
import Button from "../../../components/ui/Button";
import GridContainer from "../../../components/ui/GridContainer";
import FormLayout from "./../../../components/ui/FormLayout";

export default function AddNewCategoryForm() {
  // categoryEnglishName -- categoryArabicName -- uploadImage
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm();

  const onSubmitFun = () => {
    console.log("ffff", "gggg");
  };
  return (
    <FormLayout onSubmit={handleSubmit(onSubmitFun)}>
      <div className="text-[30px] font-bold">Add Book</div>
      <GridContainer>
        <Input label={"categoryNameArabic"} type="text" />
        <Input label={"categoryNameEnglish"} type="text" />
      </GridContainer>
      <Input label={"image"} type="file" />
      <div className="my-[20px] ">
        <Button style={"w-[100%]"}> Submit </Button>
      </div>
    </FormLayout>
  );
}
