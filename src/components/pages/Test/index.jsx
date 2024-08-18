import { Box } from "@mui/system";
import BarChart from "../../organisms/diagrams/BarChart";
import TestTable from "../../organisms/tables/Test";
import Header from "../../atoms/Header";
import DateSelectComponent from "../../molecules/DateComponent";

const Test = () => {
  return (
    <Box
      height="100%"
    >
      <Header title="Test Page" subtitle="This is Test Page" />
      <DateSelectComponent />
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

