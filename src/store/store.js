import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./../pages/client/order-cart/slice-services/cartSlice";

const storeRedux = configureStore({
  reducer: {
    cart: cartSlice,
  },
});

export default storeRedux;
