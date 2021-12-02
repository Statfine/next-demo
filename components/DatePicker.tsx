/*
 * @Description: 时间选择器
 * @Author: shaojia
 * @Date: 2021-12-02 16:00:26
 * @LastEditTime: 2021-12-02 16:00:26
 * @LastEditors: shaojia
 */
import dayjsGenerateConfig from "rc-picker/lib/generate/dayjs";
import generatePicker from "antd/lib/date-picker/generatePicker";

const DatePicker = generatePicker(dayjsGenerateConfig);

export default DatePicker;
