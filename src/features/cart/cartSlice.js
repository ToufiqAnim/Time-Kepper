import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  totalQuantity: 0,
  totalPrice: 0,
  shipping: 14.9,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const selectedProduct = action.payload;
      const existingProduct = state.cart.find(
        (product) => product._id === selectedProduct._id
      );
      if (existingProduct) {
        existingProduct.quantity++;
        existingProduct.ProductPrice += selectedProduct.price;
      } else
        state.cart.push({
          ...selectedProduct,
          quantity: 1,
          ProductPrice: selectedProduct.price,
        });

      state.totalQuantity++;
      state.totalPrice = state.totalPrice + selectedProduct.price;
    },
    removeFromCart: (state, action) => {
      /*  const existingProduct = state.cart.find(
        (product) => product._id === action.payload._id
      ); */
      const selectedPorduct = action.payload;
      if (action.payload.quantity > 1) {
        const product = {
          ...selectedPorduct,
          quantity: selectedPorduct.quantity - 1,
          ProductPrice: selectedPorduct.ProductPrice - selectedPorduct.price,
        };
        state.cart = state.cart.filter(
          (product) => product._id !== selectedPorduct._id
        );
        state.cart.push(product);
      } else {
        state.cart = state.cart.filter(
          (product) => product._id !== selectedPorduct._id
        );
      }
      state.totalQuantity--;
      state.totalPrice -= selectedPorduct.price;
    },
    clearCart: (state) => {
      state.cart = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    },
  },
});
export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
