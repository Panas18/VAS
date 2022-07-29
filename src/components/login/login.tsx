import { Button, Checkbox, Form, Input } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
// import { AuthContext, AuthInterface } from "../../contexts/auth/auth";
import "./login.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { loginAction, logoutAction } from "../../store/slice/authSlice";

export const Login: React.FC = () => {
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const isLoggedIn = useSelector((state: RootState) => state.isLoggedIn.isAuth);

  const onFinish = () => {
    localStorage.setItem("isLoggedIn", JSON.stringify(true));
    dispatch(loginAction());

    navigation({ pathname: "/home" });
  };

  const onFinishFailed = (errorInfo: any) => {
    dispatch(loginAction());
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 8 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      className="login"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{ offset: 8, span: 16 }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
