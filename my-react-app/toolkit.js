import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";

// const { configureStore, createAction, createReducer } = toolkit;

// const initialState = {
//   cart: [],
// };

const addToCart = createAction("ADD_TO_CART");

const cartReducer = createReducer([], (builder) => {
  builder.addCase(addToCart, (state, action) => {
    state.push(action.payload);
    // state.cart = [...state.cart, action.payload];
  });
});

const login = createAction("CREATE_SESSION");

const loginReducer = createReducer({ status: false }, (builder) => {
  builder.addCase(login, (state, action) => {
    state.status = true;
  });
});

const store = configureStore({
  reducer: {
    login: loginReducer,
    cart: cartReducer,
  },
});

console.log("onCreate store : ", store.getState());

store.subscribe(() => {
  console.log("onSubscribe store : ", store.getState());
});

store.dispatch(addToCart({ id: 1, qty: 20 }));
store.dispatch(addToCart({ id: 2, qty: 10 }));
store.dispatch(login());
