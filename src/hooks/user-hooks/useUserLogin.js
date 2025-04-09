import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { userLogin } from "../../services/api/user-API/auth.api";

export default function useUserLogin() {
  const navigate = useNavigate();
  const { mutate: login, isPending } = useMutation({
    mutationFn: userLogin,
    onSuccess: () => {
      toast.success("Successfuly Operation");
      navigate("/");
    },
    onError: (error) => {
      console.log("Error", error);
      toast.error("Error Operation");
    },
  });
  return { login, isPending };
}
