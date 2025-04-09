import { createAsyncThunk } from "@reduxjs/toolkit";

// export const GetProfileProvierCompany = createAsyncThunk(
//   "Profile/GetProfileProvierCompany",
//   async (args, thunkApi) => {
//     const bearerToken = localStorage.getItem("token");

//     try {
//       const { data } = await axios.get(environment.GetProfileCompany, {
//         headers: {
//           "Content-type": "application/json",
//           Authorization: `Bearer ${bearerToken}`,
//         },
//       });
//       return thunkApi.fulfillWithValue(data);
//     } catch (e) {
//       return thunkApi.rejectWithValue(e.response.data);
//     }
//   }
// );
