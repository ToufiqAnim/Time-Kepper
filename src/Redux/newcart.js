import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    /*  addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    }, */
    addProduct: (state, action) => {
      console.log("Paylod: ", action.payload);
      const itemIndex = state.products.findIndex(
        (item) => item._id === action.payload._id
      );
      if (itemIndex >= 0) {
        state.products[itemIndex].qty += action.payload.quantity;
      } else {
        state.products.push(action.payload);
        state.quantity += 1;
      }
      state.total += action.payload.price * action.payload.qty;
    },
    removeCart: (state, action) => {
      const newArray = state.products.filter(
        (cart) => cart._id !== action.payload._id
      );
      state.products = newArray;
      state.quantity -= 1;

      const amount = state.total - action.payload.qty * action.payload.price;
      state.total = amount;
    },
    cartDecrement: (state, { payload }) => {
      const itemIndex = state.products.findIndex(
        (item) => item._id === payload._id
      );
      if (state.products[itemIndex].qty > 1) {
        console.log(state.products[itemIndex].qty);

        state.products[itemIndex].qty -= 1;
        const amount = state.total - 1 * payload.price;
        state.total = amount;
      }
    },
    cartIncrement: (state, { payload }) => {
      console.log("Payload: ", payload);
      const itemIndex = state.products.findIndex(
        (item) => item._id === payload._id
      );
      if (state.products[itemIndex].qty >= 1) {
        state.products[itemIndex].qty += 1;
        const amount = state.total + 1 * payload.price;
        state.total = amount;
      }
    },
  },
});

export const { addProduct, removeCart, cartIncrement, cartDecrement } =
  cartSlice.actions;
export default cartSlice.reducer;
