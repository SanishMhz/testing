import { getUserFromLocal, removeUserFromLocal, setUser } from "@/constants/localStorage";
import { createSlice } from "@reduxjs/toolkit";

interface User {
  id: string;
  name: string;
  email: string;
  auth_token:string;
}


interface UserState {
  user: User | null;
}

const initialState: UserState = {
  user: getUserFromLocal(),
};

export const userSlice=createSlice({
  name:"userSlice",
  initialState, 
  reducers:{
    addUser:(state,action)=>{
      state.user=action.payload;
      setUser(action.payload)
    },
    removeUser:(state)=>{
      state.user=null;
      removeUserFromLocal()
    }
  }
})

export const {addUser,removeUser}=userSlice.actions;