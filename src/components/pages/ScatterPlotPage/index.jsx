import { Box } from "@mui/system";
import ScatterPlot from "../../organisms/diagrams/ScatterPlot";
import TestTable from "../../organisms/tables/Test";
import Header from "../../atoms/Header";
import DateSelectComponent from "../../molecules/DateComponent";

const ScatterPlotPage = () => {
  return (
    <Box
      height="100%"
    >
      <Header title="Scatter Plot" subtitle="This is Scatter Plot Page" />
      <DateSelectComponent />
      <Box
        display="flex"
        justifyContent="center"
        maxHeight="600px"
        height="100%"
        width="90%"
        margin="auto"
      >
        <ScatterPlot />
      </Box>
      <TestTable />
    </Box>
  );
}

export default ScatterPlotPage;
