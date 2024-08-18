import { Box } from "@mui/system";
import Radar from "../../organisms/diagrams/Radar";
import TestTable from "../../organisms/tables/Test";
import Header from "../../atoms/Header";
import DateSelectComponent from "../../molecules/DateComponent";

const RadarChartPage = () => {
  return (
    <Box
      height="100%"
    >
      <Header title="Test Page" subtitle="This is Radar Chart Page" />
      <DateSelectComponent />
      <Box
        display="flex"
        justifyContent="center"
        maxHeight="600px"
        height="100%"
        width="90%"
        margin="auto"
      >
        <Radar />
      </Box>
      <TestTable />
    </Box>
  );
}

export default RadarChartPage;

