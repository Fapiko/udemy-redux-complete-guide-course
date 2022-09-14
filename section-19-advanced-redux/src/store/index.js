import {configureStore} from '@reduxjs/toolkit';
import uiReducer from './ui-slice';
import cartSlice from './cart-slice';

const store = configureStore({
    reducer: {ui: uiReducer, cart: cartSlice.reducer},
});

export default store;
