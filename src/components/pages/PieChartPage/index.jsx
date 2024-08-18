import { Box } from "@mui/system";
import PieChart from "../../organisms/diagrams/PieChart";
import TestTable from "../../organisms/tables/Test";
import Header from "../../atoms/Header";
import DateSelectComponent from "../../molecules/DateComponent";

const PieChartPage = () => {
  return (
    <Box
      height="100%"
    >
      <Header title="Test Page" subtitle="This is Pie Chart Page" />
      <DateSelectComponent />
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

