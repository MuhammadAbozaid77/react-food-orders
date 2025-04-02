import { useMutation } from "@tanstack/react-query";
import { loginAPI } from "../services/dataAPi";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function useLogin() {
  const navigate = useNavigate();
  const { mutate: login, isPending } = useMutation({
    mutationFn: loginAPI,
    onSuccess: () => {
      toast.success("Successfuly Operation");
      navigate("/dashbord");
    },
    onError: (error) => {
      console.log("Error", error);
      toast.error("Error Operation");
    },
  });
  return { login, isPending };
}
