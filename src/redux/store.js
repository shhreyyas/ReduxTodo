import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import subscriptionReducer from "./subscriptionSlice";


const Store = configureStore({
  reducer: {
    users: userReducer,
    subscription: subscriptionReducer,
  },
});

export default Store;
