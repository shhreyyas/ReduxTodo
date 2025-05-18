import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSubscribed: false,
  subscriberInfo: null, // Optional: name, email, plan, etc.
};

const subscriptionSlice = createSlice({
  name: "subscription",
  initialState,
  reducers: {
    subscribe: (state, action) => {
      state.isSubscribed = true;
      state.subscriberInfo = action.payload;
    },
    unsubscribe: (state) => {
      state.isSubscribed = false;
      state.subscriberInfo = null;
    },
  },
});

export const { subscribe, unsubscribe } = subscriptionSlice.actions;
export default subscriptionSlice.reducer;
