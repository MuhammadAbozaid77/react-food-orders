import { useForm } from "react-hook-form";
import CustomInput from "./../../../components/ui/CustomInput";
import { useTranslation } from "react-i18next";
import HeaderContent from "../../../components/ui/HeaderContent";
import Button from "./../../../components/ui/Button";
import logoImage from "./../../../assets/mainLogo.png";
import Spinner from "./../../../components/ui/Spinner";
import useUserLogin from "./../../../hooks/user-hooks/useUserLogin";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
export default function Login() {
  const { t } = useTranslation();
  const { login, isPending } = useUserLogin();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // console.log(data);
    login({ data });
  };

  const isLoading = false;

  return (
    <div className="lg:w-[550px] w-full  bg-white  rounded-[10px] ">
      <div className="p-5 flex justify-center items-center ">
        <img className="md:w-[180px] w-[150px]" src={logoImage} alt="" />
      </div>
      <HeaderContent style={"text-center text-mainTextColor "}>
        {t("login.login")}
      </HeaderContent>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="px-5 py-[20px] rounded-md"
      >
        <CustomInput
          label={t("login.userEmail")}
          type="email"
          {...register("userEmail", {
            required: "userEmail is required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Please provide a valid email address",
            },
          })}
          error={errors.userEmail?.message}
          disabled={isPending}
        />
        <CustomInput
          label={t("login.userPassword")}
          type="password"
          {...register("userPassword", {
            required: "userPassword is required",
          })}
          error={errors.userPassword?.message}
          disabled={isPending}
        />

        <div className="flex flex-col gap-4 mt-[20px]">
          <Button type="button" disabled={isLoading}>
            {isLoading ? (
              <div className="flexCenter">
                <Spinner />
              </div>
            ) : (
              <div className="flex justify-between items-center gap-1   w-[350px]">
                {t("login.loginWithGoogle")}
                <div className="border border-gray-300 shadow  p-1 rounded-lg bg-white">
                  <FcGoogle size={30} />
                </div>
              </div>
            )}
          </Button>
          <Button type="button" disabled={isLoading}>
            {isLoading ? (
              <div className="flexCenter">
                <Spinner />
              </div>
            ) : (
              <div className="flex justify-between items-center   gap-1 w-[350px]">
                {t("login.loginWithFaceBook")}
                <div className="border border-gray-300 shadow  p-1 rounded-lg bg-white text-blue-700">
                  <FaFacebook size={30} />
                </div>
              </div>
            )}
          </Button>
        </div>

        <div className="my-[20px]">
          <Button type="submit" disabled={isPending}>
            <span>
              {isPending ? <Spinner size={""} disabled={isPending} /> : ""}
            </span>
            {isPending ? "" : "Submit"}
          </Button>
        </div>
      </form>
    </div>
  );
}

// Login Steps
// 1- Get Data and Front Validation
// 2- Send Data To API and Back Validation
// 3- Save Data In DataBase
