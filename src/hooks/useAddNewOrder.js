import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";
import { addNewOrderFun } from "../services/api/dataAPi";

export default function useAddNewOrder() {
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: addNewOrderFun,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["orders"] });
      toast.success("Successfuly Operation");
    },
    onError: (error) => {
      console.log("Error", error);
      toast.error("Successfuly Operation");
    },
  });
  return { mutate, isPending };
}
