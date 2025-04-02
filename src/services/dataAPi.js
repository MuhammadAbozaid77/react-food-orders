export const addNewOrderFun = (data) => {
  console.log("From Mutation", data);
};

export async function loginAPI(arg) {
  console.log("Login API called with:", arg);

  // Simulating delay
  await new Promise((resolve) => setTimeout(resolve, 3000));

  console.log("Processing completed");
  return [{ successful: "successful" }];
}
