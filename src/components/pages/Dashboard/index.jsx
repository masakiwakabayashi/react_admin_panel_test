import React, { useState } from "react";
import { Box } from "@mui/system";
import Header from "../../atoms/Header";
import DateSelectComponent from "../../molecules/DateComponent";

import BarChart from "../../organisms/diagrams/BarChart";

const Dashboard = () => {
  return (
    <Box m="20px">
      <BarChart />
    </Box>
  );
}

export default Dashboard;
