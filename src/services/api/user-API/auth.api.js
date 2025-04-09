export async function userLogin(arg) {
  console.log("Login API called with:", arg);

  // Simulating delay
  await new Promise((resolve) => setTimeout(resolve, 3000));
  localStorage.setItem("userData", "muhammad");

  console.log("Processing completed");
  return [{ successful: "successful" }];
}
