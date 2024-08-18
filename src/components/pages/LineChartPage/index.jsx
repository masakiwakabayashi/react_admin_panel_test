import { Box } from "@mui/system";
import LineChart from "../../organisms/diagrams/LineChart";
import TestTable from "../../organisms/tables/Test";
import Header from "../../atoms/Header";
import DateSelectComponent from "../../molecules/DateComponent";

const LineChartPage = () => {
  return (
    <Box
      height="100%"
    >
      <Header title="Test Page" subtitle="This is Line Chart Page" />
      <DateSelectComponent />
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

