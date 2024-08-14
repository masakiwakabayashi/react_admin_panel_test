import { Box } from "@mui/system";
import BarChart from "../../organisms/diagrams/BarChart";
import TestTable from "../../organisms/tables/Test";

const Test = () => {
  return (
    <Box
      height="100%"
    >
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
      <TestTable />
    </Box>
  );
}

export default Test;

