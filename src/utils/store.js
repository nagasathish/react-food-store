import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

const store = configureStore({
    reducer : {
        cart: cartSlice
    }
});

export default store;

/**
 * Create Store
 * - configureStore() - RTK
 * 
 * Provide store to app
 * <Provider store={store}?
 * 
 * Slice
 * - RTK - createSlice(
 * {
 * name: '',
 * initialState:'',
 * reducers: {
 *     addItem: (state, action) => {}
 * }
 * })
 * export const {addItem} = cartSlice.actions;
 * export default cartSlice.reducer;
 * 
 * Put that slice in store
 * 
 * const store = configureStore({
    reducer : {
        cart: cartSlice
    }
});
 */