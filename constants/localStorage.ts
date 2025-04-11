interface User {
  id: string;
  name: string;
  email: string;
}


export const setUser = (user: User) => {
  localStorage.setItem('user', JSON.stringify(user));
};


export const getUserFromLocal = (): User | null=> {
  const user = localStorage.getItem('user');
  return user === null ? null : JSON.parse(user) as User;
};


export const removeUserFromLocal = (): void => {
  localStorage.removeItem('user'); 
};