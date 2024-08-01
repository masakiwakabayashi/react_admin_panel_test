import { Box, Typography } from "@mui/material";
import ProgressCircle from "../atoms/ProgressCircle";


const StatBox = ({title, subtitle, icon, progress, increase }) => {
  return (
    <Box width="100%" m="0 30px">
      <Box display="flex" justifyContent="space-between">
        <Box>
          {icon}
          <Typography
            variant="h6"
            fontWeight="bold"
          >
            {title}
          </Typography>
        </Box>
        <Box>
          <ProgressCircle progress={progress} />
        </Box>
      </Box>
      <Box display="flex" justifyContent="space-between" mt="2px">
        <Typography
          // variant="h6"
        >
          {subtitle}
        </Typography>
        <Typography
          // variant="h5"
          fontStyle="italic"
        >
          {increase}
        </Typography>
      </Box>
    </Box>
  );
}

export default StatBox;

