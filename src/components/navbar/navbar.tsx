import { NavLink, useNavigate } from "react-router-dom";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import { logoutAction } from "../../store/slice/authSlice";
import "./navbar.css";
import { Button } from "antd/lib/radio";

export const Navbar: React.FC = () => {
  const dispatch = useDispatch();
  // const isLoggedIn = useSelector((state: RootState) => state.isLoggedIn.isAuth);
  const navigation = useNavigate();

  const handleLogout = () => {
    dispatch(logoutAction());
    localStorage.setItem("isLoggedIn", JSON.stringify(false));
    navigation({ pathname: "/login" });
  };
  return (
    <div className="navbar">
      <div className="navbar--link">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/patient">Patient</NavLink>
      </div>
      <div className="navbar--button">
        <Button onClick={handleLogout} type="primary">
          Logout
        </Button>
      </div>
    </div>
  );
};
