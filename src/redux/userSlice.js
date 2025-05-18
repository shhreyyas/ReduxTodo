const initialState = [
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: 2, name: "Jane Smith", email: "jane@example.com" },
];

import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    //add user
    addUser: (state, action) => {      
      state.push(action.payload);
    },

    //update user
    updateUser: (state, action) => {
      const {id, name, email} = action.payload;
      
      const updatedUser = state.find((x)=>x.id === id);
      console.log(updatedUser);
      if(updatedUser){
        updatedUser.name = name;
        updatedUser.email = email;
      }
    },

    //delete user
    deleteUser: (state, action) => {
      return state.filter((x) => x.id !== action.payload);
    },
  },
});

export const { addUser, updateUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
