import { useTranslation } from "react-i18next";
import noCart from "./../../assets/empty-cart.png";
export default function NoData() {
  const { t } = useTranslation();
  return (
    <div className="flex justify-center items-center flex-col pt-[50px]">
      <div className="rounded-2xl overflow-hidden w-[500px] p-5 flex justify-center items-center">
        <img
          src={noCart}
          //   className=""
          className="hover:scale-[1.1] transition-all duration-200 w-[300px]"
        />
      </div>
      <div className="mt-[20px] text-[30px] font-bold"> {t("general.noItemInCart")} </div>
    </div>
  );
}
