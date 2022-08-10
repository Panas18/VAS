import React from "react";
import { useState } from "react";
import { Button, Form, Input, DatePicker, Radio, Checkbox } from "antd";
// import { useDispatch } from "react-redux";
import { PatientToInsert } from "../../store/sliceInterface/patient";
import "./patientForm.css";
import { httpMethods, BACKEND_URL } from "../../common/common";

export const PatientForm: React.FC = () => {
  const [form] = Form.useForm();
  // const dispatch = useDispatch();
  const [check, setCheck] = useState(false);
  const onCheckboxChange = (e: { target: { checked: boolean } }) => {
    setCheck(e.target.checked);
  };

  const onFinish = async (values: any) => {
    const formatedData: PatientToInsert = {
      first_name: values.first_name,
      last_name: values.last_name,
      dob: values.dob.format("YYYY-MM-DD").toString(),
      gender: values.gender,
      email: values.email,
      ethinicity: values.ethinicity,
      street: values.street,
      state: values.state,
      city: values.city,
      insurance_id: values.insurance_id,
      member_id: values.member_id,
      insurance_provider: values.insurance_provider,
    };

    try {
      console.log(formatedData);

      await fetch(`${BACKEND_URL}patient/add`, {
        method: httpMethods.POST,
        body: JSON.stringify(formatedData),
        headers: { "Content-Type": "application/json" },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="patientForm">
      <Form
        form={form}
        name="basic"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        initialValues={{ remember: true }}
        autoComplete="off"
      >
        <Form.Item
          label="First Name"
          name="first_name"
          rules={[{ required: true, message: "Please input your first name" }]}
        >
          <Input placeholder="First Name" />
        </Form.Item>
        <Form.Item
          label="Last Name"
          name="last_name"
          rules={[{ required: true, message: "Please input your last name" }]}
        >
          <Input placeholder="Last Name" />
        </Form.Item>
        <Form.Item
          label="Date of Birth"
          name="dob"
          rules={[{ required: true, message: "Please enter your dob" }]}
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
            name="insurance_id"
            rules={[{ required: true }]}
            style={{ display: "inline-block" }}
          >
            <Input placeholder="Insurence ID" />
          </Form.Item>
          <Form.Item
            name="member_id"
            rules={[{ required: true }]}
            style={{ display: "inline-block" }}
          >
            <Input placeholder="Member ID" />
          </Form.Item>
          <Form.Item
            name="insurance_provider"
            rules={[{ required: true }]}
            style={{ display: "inline-block" }}
          >
            <Input placeholder="Insurance Provider" />
          </Form.Item>
        </Form.Item>
        <Form.Item
          name="Confirm"
          valuePropName="checked"
          rules={[{ required: true, message: "Confirmation Required" }]}
        >
          <Checkbox checked={check} onChange={onCheckboxChange}>
            I Agree
          </Checkbox>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" disabled={!check}>
            Add Patient
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
