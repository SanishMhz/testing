import { getUserFromLocal, removeUserFromLocal, setUser } from "@/constants/localStorage";
import { createSlice } from "@reduxjs/toolkit";

interface User {
  id: string;
  name: string;
  email: string;
}
export const userSlice=createSlice({
  name:"userSlice",
  initialState:{
    user:getUserFromLocal() 
  },
  reducers:{
    addUser:(state,action)=>{
      state.user=action.payload;
      setUser(state.user)
    },
    removeUser:(state)=>{
      state.user=null;
      removeUserFromLocal()
    }
  }
})

export const {addUser,removeUser}=userSlice.actions;