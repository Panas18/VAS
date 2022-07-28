import { Link, useNavigate } from "react-router-dom";
import React, { useContext } from "react";
import { AuthContext, AuthInterface } from "../../contexts/auth/auth";

export const Navbar: React.FC = () => {
  const { isLoggedIn, setLoggedIn } = useContext(AuthContext) as AuthInterface;
  const navigation = useNavigate();
  const handleLogout = () => {
    setLoggedIn(false);
    localStorage.setItem("isLoggedIn", JSON.stringify(false));
    navigation({ pathname: "/login" });
  };
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};
