interface User {
  id: string;
  name: string;
  email: string;
  auth_token:string;
}


// export const setUser = (user: User) => {
//   localStorage.setItem('user', JSON.stringify(user));
// };


// export const getUserFromLocal = (): User | null=> {
//   const user = localStorage.getItem('user');
//   return user === null ? null : JSON.parse(user) as User;
// };

export const getUserFromLocal = (): User | null => {
  if (typeof window === "undefined") {
    return null; 
  }

  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) as User : null;
};


// export const removeUserFromLocal = (): void => {
//   localStorage.removeItem('user'); 
// };

export const setUser = (user: User) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("user", JSON.stringify(user));
  }
};

export const removeUserFromLocal = (): void => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("user");
  }
};