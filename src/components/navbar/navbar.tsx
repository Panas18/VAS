import { Link, useNavigate } from "react-router-dom";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import { logoutAction } from "../../store/slice/authSlice";

export const Navbar: React.FC = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state: RootState) => state.isLoggedIn.isAuth);
  const navigation = useNavigate();
  const handleLogout = () => {
    dispatch(logoutAction());
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
