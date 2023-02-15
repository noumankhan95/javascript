import { configureStore } from "@reduxjs/toolkit";
import ProductsSlice from "./ProductsSlice";
const Store = configureStore({
  reducer: { ProductsSlice },
});

export default Store;
