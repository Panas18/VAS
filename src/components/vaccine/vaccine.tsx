import { Form, Input, DatePicker, Space, Select, TimePicker } from "antd";
import type { Moment } from "moment";
import moment from "moment";
import React from "react";

const { RangePicker } = DatePicker;
const { Option } = Select;

const Date: React.FC = () => (
  <Space direction="vertical" size={12}>
    <RangePicker />
  </Space>
);

const TimeSelector: React.FC = () => (
  <TimePicker defaultOpenValue={moment("00:00:00", "HH:mm:ss")} />
);

const SelectForm: React.FC = () => (
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
);

export const VaccineForm: React.FC = () => {
  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 8 }}
      initialValues={{ remember: true }}
      autoComplete="off"
    >
      <Form.Item
        label="Servicename"
        name="servicename"
        rules={[{ required: true, message: "Please input servicename!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Sitelocation"
        name="sitelocation"
        rules={[{ required: true, message: "Please input sitelocation!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item label="Date" name="date">
        <Date />
      </Form.Item>
      <Form.Item
        label="DoseType"
        name="dosetype"
        rules={[{ required: true, message: "Please input sitelocation!" }]}
      >
        <SelectForm />
      </Form.Item>
      <Form.Item
        label="Duration"
        name="duration"
        rules={[{ required: true, message: "Please input duration!" }]}
      >
        <TimeSelector />
      </Form.Item>
    </Form>
  );
};
