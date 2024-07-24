import { Box } from "@mui/system";
import BarChart from "../../organisms/diagrams/BarChart";


const Test = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      maxHeight="600px"
      height="100%"
      width="90%"
      margin="auto"
    >
      <BarChart />
    </Box>
  );
}

export default Test;

