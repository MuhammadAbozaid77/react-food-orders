import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  //   cart: [],
  //   totalPrice: 0,
  //   numberOfItems: 0,

  cart: [
    {
      id: 12,
      name: "one",
      quantity: 2,
      unitPrice: 16,
      totalPrice: 16,
    },
  ],
};

const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      state.cart = state.cart.filter((el) => el.id !== action.payload);
    },

    increaseItemQuantity(state, action) {
      const item = state.cart.find((el) => {
        el.id === action.payload;
      });
      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    descreaseItemQuantity(state, action) {
      const item = state.cart.find((el) => {
        el.id === action.payload;
      });
      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  clearCart,
  descreaseItemQuantity,
  deleteItem,
  increaseItemQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;

// extraReducers : (builder)=>{
//   builder.addCase(GetProfileProvierCompany.pending, (state, action) => {
//     state.isLoading = true;
//     state.error = null;
//   });
//   builder.addCase(GetProfileProvierCompany.fulfilled, (state, action) => {
//     state.isLoading = false;
//     state.error = null;
//     state.data = action.payload.data;
//   });
//   builder.addCase(GetProfileProvierCompany.rejected, (state, action) => {
//     state.isLoading = false;
//     state.error = action.payload.message;
//   });
// }
