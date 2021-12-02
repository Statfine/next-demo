import type { NextPage } from "next";
import { Form, Select, InputNumber, Switch, Slider, Button } from "antd";

import DatePicker from "../../components/DatePicker";

const FormItem = Form.Item;
const Option = Select.Option;

const Team: NextPage = () => {
  return (
    <div>
      <InputNumber
        size="large"
        min={1}
        max={10}
        style={{ width: 100 }}
        defaultValue={3}
        name="inputNumber"
      />
      <Slider defaultValue={70} />
      <Select size="large" defaultValue="lucy" style={{ width: 192 }}>
        <Option value="jack">jack</Option>
        <Option value="lucy">lucy</Option>
        <Option value="disabled" disabled>
          disabled
        </Option>
        <Option value="yiminghe">yiminghe</Option>
      </Select>
      <DatePicker name="startDate" />
      <Button size="large" style={{ marginLeft: 8 }}>
        Cancel
      </Button>
    </div>
  );
};

export default Team;
