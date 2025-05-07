import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  totalPrice: 0,
  totalCount: 0,
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

    getTotalCount(state) {
      state.totalCount = state.cart.length;
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

// export const cartTotalPrice = (state) => {
//   state?.cart?.reduce((sum, item) => sum + item?.quantity);
// };
// export const cartTotalQuantity = (state) => {
//   state.cart.cart.reduce((sum, item) => sum + item.totalPrice);
// };
