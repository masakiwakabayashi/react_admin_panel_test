import { Box } from "@mui/system";
import LineChart from "../../organisms/diagrams/LineChart";
import TestTable from "../../organisms/tables/Test";

const LineChartPage = () => {
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
        <LineChart />
      </Box>
      <TestTable />
    </Box>
  );
}

export default LineChartPage;

