import {
  Form,
  Input,
  DatePicker,
  Select,
  TimePicker,
  Radio,
  InputNumber,
  Button,
} from "antd";
import moment from "moment";
import React from "react";
import { useDispatch } from "react-redux";
import "./vaccineAppointmentForm.css";
import { singleVaccineAppointmentInterface } from "../../store/sliceInterface/vaccineAppointmentInterface";
import { addVaccineAppointment } from "../../store/slice/vaccineAppointmentSlice";

const { RangePicker } = DatePicker;
const { Option } = Select;

export const VaccineAppointmentForm: React.FC = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const onFinish = (values: any) => {
    const formattedData: singleVaccineAppointmentInterface = {
      servicename: values.servicename,
      sitelocation: values.servicelocation,
      startdate: values.date[0].format("YYYY-MM-DD").toString(),
      enddate: values.date[1].format("YYYY-MM-DD").toString(),
      duration: values.duration.format("HH-mm-ss").toString(),
      dosetype: values.dosetype,
      gender: values.gender,
      age: values.age,
      ethinicity: values.ethinicity,
    };

    dispatch(addVaccineAppointment(formattedData));
    form.resetFields();
  };
  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="vaccineAppointmentForm">
      <Form
        name="basic"
        form={form}
        initialValues={{ remember: true }}
        autoComplete="off"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
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
          <RangePicker />
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
