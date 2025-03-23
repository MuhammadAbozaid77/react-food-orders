import { useForm } from "react-hook-form";

export default function AddNewCategoryForm() {
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm();

  const onSubmitFun = () => {
    console.log("ffff", "gggg");
  };
  return (
    <form onSubmit={handleSubmit(onSubmitFun)}>
      <input type="text" {...register("check-orders")} />
    </form>
  );
}
