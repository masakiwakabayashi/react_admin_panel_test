import React, { useState } from "react";
import { Box } from "@mui/system";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ja from 'date-fns/locale/ja';

const DateSelectComponent = ({selectedDate, onChange}) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <Box display="flex" justifyContent="right">
      <Box p={2}>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          dateFormat="yyyy年MM月dd日"
          locale={ja}
        />
      </Box>
      <Box py={2}>〜</Box>
      <Box p={2}>
        <DatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          dateFormat="yyyy年MM月dd日"
          locale={ja}
        />
      </Box>
    </Box>
  );
}

export default DateSelectComponent;
