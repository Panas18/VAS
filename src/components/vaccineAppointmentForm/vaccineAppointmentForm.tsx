import {
  Form,
  Input,
  DatePicker,
  Space,
  Select,
  TimePicker,
  Radio,
  InputNumber,
  Button,
} from "antd";
import moment from "moment";
import React from "react";
import "./vaccineAppointmentForm.css";

const { RangePicker } = DatePicker;
const { Option } = Select;

export const VaccineAppointmentForm: React.FC = () => {
  return (
    <div className="vaccineAppointmentForm">
      <Form
        name="basic"
        initialValues={{ remember: true }}
        autoComplete="off"
        // onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Service Name"
          name="servicename"
          rules={[{ required: true, message: "Please input servicename!" }]}
        >
          <Input placeholder="Service Name" />
        </Form.Item>
        <Form.Item
          label="Site Location"
          name="sitelocation"
          rules={[{ required: true, message: "Please input sitelocation!" }]}
        >
          <Input placeholder="Site Location" />
        </Form.Item>
        <Form.Item
          label="Date"
          name="date"
          rules={[{ required: true, message: "Please input date range!" }]}
        >
          <Space direction="vertical" size={12}>
            <RangePicker />
          </Space>
        </Form.Item>
        <Form.Item
          label="DoseType"
          name="dosetype"
          rules={[{ required: true, message: "Please select dose type!" }]}
        >
          <Select
            showSearch
            placeholder="Select Dose Type"
            optionFilterProp="children"
            filterOption={(input, option) =>
              (option!.children as unknown as string)
                .toLowerCase()
                .includes(input.toLowerCase())
            }
          >
            <Option value="singleDose">Single Dose</Option>
            <Option value="multipleDose">Multiple Dose</Option>
          </Select>
        </Form.Item>
        <Form.Item
          label="Duration"
          name="duration"
          rules={[{ required: true, message: "Please input duration!" }]}
        >
          <TimePicker defaultOpenValue={moment("00:00:00", "HH:mm:ss")} />
        </Form.Item>
        <Form.Item
          label="Gender"
          name="gender"
          rules={[{ required: true, message: "Please select your gender!" }]}
        >
          <Radio.Group>
            <Radio value="male">Male</Radio>
            <Radio value="female">Female</Radio>
            <Radio value="other">Other</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          label="Age"
          name="age"
          rules={[{ required: true, message: "Please input your age!" }]}
        >
          <InputNumber max={120} min={0} placeholder="Age" />
        </Form.Item>
        <Form.Item
          label="Ethinicity"
          name="ethinicity"
          rules={[{ required: true, message: "Please input your ethinicity!" }]}
        >
          <Input placeholder="Ethinicity" />
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
