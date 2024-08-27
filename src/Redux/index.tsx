import { configureStore, Middleware } from "@reduxjs/toolkit";
import CounterSlice from "./slices/CounterSlice";
import CounterApi from "./slices/CounterApi";


// Custom middleware example
const customMiddleware: Middleware = (store) => (next) => (action) => {
  console.log('Custom Middleware:', action);
  return next(action);
};

const CustomStore = configureStore({
    reducer:{
        Counter: CounterSlice,
        [CounterApi.reducerPath]: CounterApi.reducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware({}).concat(CounterApi.middleware).concat(customMiddleware)
})

export default CustomStore;