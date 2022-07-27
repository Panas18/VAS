import React, { createContext, useState } from "react";

export interface AuthInterface {
  isLoggedIn: boolean;
  setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

type Props = {
  children: JSX.Element;
};

export const AuthContext = createContext<AuthInterface | null>(null);

export const AuthProvider: React.FC<Props> = ({ children }: Props) => {
  const [isLoggedIn, setLoggedIn] = useState<boolean>(false);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};
