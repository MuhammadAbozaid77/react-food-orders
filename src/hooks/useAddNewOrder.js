import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React from "react";

export default function useAddNewOrder() {
  const addNewOrderFun = () => {};
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: addNewOrderFun,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["orders"] });
    },
    onError: (error) => {
      console.log("Error", error);
    },
  });
  return { mutate, isPending };
}
