import { useQuery } from "@tanstack/react-query";
import React from "react";

export default function useGetAdminOrders() {
  const getAdminOrdersFunction = () => {};
  const { data, error, isLoading } = useQuery({
    queryKey: ["orders"],
    queryFn: getAdminOrdersFunction,
  });
  return { data, error, isLoading };
}
