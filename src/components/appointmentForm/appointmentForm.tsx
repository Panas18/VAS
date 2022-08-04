import React from "react";
import { Button, Form, Input, Select } from "antd";
import "./appointmentForm.css";

const { Option } = Select;

export const AppointmentForm: React.FC = () => {
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="appointmentForm">
      <Form
        name="appointment"
        initialValues={{ remember: true }}
        autoComplete="off"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Patient Id"
          name="patientId"
          rules={[{ required: true, message: "Please input patient ID!" }]}
        >
          <Input placeholder="Patient Id" />
        </Form.Item>
        <Form.Item
          label="Site Location"
          name="siteLocation"
          rules={[{ required: true, message: "Please select site location!" }]}
        >
          <Select
            showSearch
            placeholder="Select Site Location"
            optionFilterProp="children"
            filterOption={(input, option) =>
              (option!.children as unknown as string)
                .toLowerCase()
                .includes(input.toLowerCase())
            }
          >
            <Option value="kathmandu">Kathmandu</Option>
            <Option value="Bhaktapur">Bhakapur</Option>
          </Select>
        </Form.Item>
        <Form.Item
          label="Service Typ"
          name="serviceType"
          rules={[{ required: true, message: "Please select service type!" }]}
        >
          <Select
            showSearch
            placeholder="Select Service Type"
            optionFilterProp="children"
            filterOption={(input, option) =>
              (option!.children as unknown as string)
                .toLowerCase()
                .includes(input.toLowerCase())
            }
          >
            <Option value="pfizer">Pfizer</Option>
            <Option value="johnson">Johnson & Johnson</Option>
          </Select>
        </Form.Item>
        <Form.Item
          label="Confirmation Code"
          name="confirmationCode"
          rules={[
            { required: true, message: "Please input confirmation code!" },
          ]}
        >
          <Input placeholder="Confirmation Code" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Add Vaccine Appointment
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
