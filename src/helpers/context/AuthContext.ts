import { createContext, useContext } from 'react';

export const AuthContext = createContext({
  user: undefined,
  isLoading: false,
  setUser: (user: any) => {},
});

export const useAuthContext = () => useContext(AuthContext);
