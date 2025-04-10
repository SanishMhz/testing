import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


const USERBASE_URL=process.env.NEXT_PUBLIC_API_USERBASE_URL;
const REGISTER_URL = process.env.NEXT_PUBLIC_API_REGISTERBASE_URL;

const getCsrfToken = () => {
  return document.cookie
    .split(';')
    .find((cookie) => cookie.trim().startsWith('csrftoken='))
    ?.split('=')[1];
};

// Base Query with Headers
const baseQuery = fetchBaseQuery({
  baseUrl: USERBASE_URL,
  prepareHeaders: (headers) => {
    headers.set("Content-Type", "application/json");
    return headers;
  },
});

const baseQueryRegister = fetchBaseQuery({
  baseUrl: REGISTER_URL,
  prepareHeaders: (headers) => {
    headers.set("Content-Type", "application/json");
    const csrfToken = getCsrfToken();
    if (csrfToken) {
      headers.set("X-CSRFTOKEN", csrfToken);  // CSRF token is added as X-CSRFTOKEN
    }
    return headers;
  },
});
// Login
export const loginApi=createApi({
  reducerPath:"loginApi",
  baseQuery,
  endpoints:(builder)=>({
    loginUser:builder.mutation<Login,LoginRequest>({
      query:(data)=>({
        url:"token/login/",
        method:"POST",
        body:data
      })
    })
  })
})

export const {useLoginUserMutation}=loginApi;

// Register
export const registerApi=createApi({
  reducerPath:"registerApi",
  baseQuery:baseQueryRegister,
  endpoints:(builder)=>({
    registerUser:builder.mutation<Register,RegisterRequest>({
      query:(data)=>({
        url:"users/",
        method:"POST",
        body:data,
        headers: {
          "Content-Type": "application/json",
        },
      })
    })
  })
})

// http://82.29.161.226:8090/auth/users/me/
export const {useRegisterUserMutation}=registerApi;

export const getUserApi=createApi({
  reducerPath:"getUserApi",
  baseQuery,
  endpoints:(builder)=>({
    getUserProfile:builder.query<UserResponse,string>({
      query:(token)=>({
      url:"users/me/",
      method:"GET",
      headers:{
        "Authorization":`token ${token}`
      }
      })
      
    })
  })
})

export const {useGetUserProfileQuery}=getUserApi;