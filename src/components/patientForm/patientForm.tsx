import React from "react";
import { Button, Form, Input, DatePicker, Radio, Upload, Checkbox } from "antd";
import { PlusOutlined } from "@ant-design/icons";

export const PatientForm: React.FC = () => {
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div>
      <Form
        name="basic"
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 5 }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        initialValues={{ remember: true }}
        autoComplete="off"
      >
        <Form.Item
          label="First Name"
          name="firstname"
          rules={[{ required: true, message: "Please input your first name" }]}
        >
          <Input placeholder="First Name" />
        </Form.Item>
        <Form.Item
          label="Last Name"
          name="lastname"
          rules={[{ required: true, message: "Please input your last name" }]}
        >
          <Input placeholder="Last Name" />
        </Form.Item>
        <Form.Item
          label="Birthday"
          name="birthday"
          rules={[{ required: true, message: "Please enter your birthday" }]}
        >
          <DatePicker />
        </Form.Item>
        <Form.Item
          label="Ethinicity"
          name="ethinicity"
          rules={[{ required: true, message: "Please input your ethinicity" }]}
        >
          <Input placeholder="Ethincity" />
        </Form.Item>
        <Form.Item
          label="Gender"
          name="gender"
          rules={[{ required: true, message: "Please select your gender" }]}
        >
          <Radio.Group>
            <Radio value="male">Male</Radio>
            <Radio value="female">Female</Radio>
            <Radio value="other">Other</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: "Please input your email adderss" },
            { type: "email", message: "Please enter valid email" },
          ]}
        >
          <Input placeholder="Email" />
        </Form.Item>
        <Form.Item label="Address" rules={[{ required: true }]}>
          <Form.Item
            name="street"
            rules={[{ required: true }]}
            style={{ display: "inline-block" }}
          >
            <Input placeholder="Street" />
          </Form.Item>
          <Form.Item
            name="city"
            rules={[{ required: true }]}
            style={{ display: "inline-block" }}
          >
            <Input placeholder="City" />
          </Form.Item>
          <Form.Item
            name="state"
            rules={[{ required: true }]}
            style={{ display: "inline-block" }}
          >
            <Input placeholder="State" />
          </Form.Item>
        </Form.Item>
        <Form.Item label="Payment" rules={[{ required: true }]}>
          <Form.Item
            name="insurence"
            rules={[{ required: true }]}
            style={{ display: "inline-block" }}
          >
            <Input placeholder="Insurence ID" />
          </Form.Item>
          <Form.Item
            name="member"
            rules={[{ required: true }]}
            style={{ display: "inline-block" }}
          >
            <Input placeholder="Member ID" />
          </Form.Item>
          <Form.Item
            name="insuranceProvider"
            rules={[{ required: true }]}
            style={{ display: "inline-block" }}
          >
            <Input placeholder="Insurance Provider" />
          </Form.Item>
        </Form.Item>
        <Form.Item label="Upload" valuePropName="fileList">
          <Upload action="/upload.do" listType="picture-card">
            <div>
              <PlusOutlined />
              <div style={{ marginTop: 8 }}>Upload</div>
            </div>
          </Upload>
        </Form.Item>
        <Form.Item
          name="Confirm"
          valuePropName="checked"
          wrapperCol={{ offset: 5, span: 16 }}
          rules={[{ required: true, message: "Confirmation Required" }]}
        >
          <Checkbox>All the information I entered is true</Checkbox>
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
