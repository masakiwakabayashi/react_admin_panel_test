import React, { useState } from "react";
import { Box, Button, IconButton, Typography } from "@mui/material";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";

import StatBox from "../../molecules/StatBox";

const Dashboard = () => {
  return (
    <Box m="20px">
      <Box m="20px">
        <Button
          sx={{
            backgroundColor: "#F9F9F9",
            color: "#000",
            fontSize: "20px",
            fontWeight: "bold",
            padding: "10px 20px",
          }}
        >
          <DownloadOutlinedIcon sx={{ mr: "10px" }} />
          ダウンロード
        </Button>
      </Box>

      {/* Grid */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* Row 1 */}
        <Box
          gridColumn="span 3"
          backgroundColor="lightcyan"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="12,361"
            subtitle="Emails Sent"
            progress="0.75"
            increase="+14%"
            icon={
              <EmailIcon
                sx={{ color: "blue", fontSize: "16px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor="lightcyan"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="431,225"
            subtitle="Sales Obtained"
            progress="0.50"
            increase="+21%"
            icon={
              <PointOfSaleIcon
                sx={{ color: "blue", fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor="lightcyan"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="32,441"
            subtitle="New Clients"
            progress="0.30"
            increase="+5%"
            icon={
              <PersonAddIcon
                sx={{ color: "blue", fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor="lightcyan"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="1,325,134"
            subtitle="Traffic Received"
            progress="0.80"
            increase="+43%"
            icon={
              <TrafficIcon
                sx={{ color: "blue", fontSize: "26px" }}
              />
            }
          />
        </Box>







        {/* Row 2 */}



      </Box>
    </Box>
  );
}

export default Dashboard;
