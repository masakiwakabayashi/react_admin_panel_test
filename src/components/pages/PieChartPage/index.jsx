import { Box } from "@mui/system";
import PieChart from "../../organisms/diagrams/PieChart";
import TestTable from "../../organisms/tables/Test";

const PieChartPage = () => {
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
        <PieChart />
      </Box>
      <TestTable />
    </Box>
  );
}

export default PieChartPage;

