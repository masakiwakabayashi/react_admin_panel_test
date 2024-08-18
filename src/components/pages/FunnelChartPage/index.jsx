import { Box } from "@mui/system";
import Funnel from "../../organisms/diagrams/Funnel";
import TestTable from "../../organisms/tables/Test";
import Header from "../../atoms/Header";
import DateSelectComponent from "../../molecules/DateComponent";

const FunnelChartPage = () => {
  return (
    <Box
      height="100%"
    >
      <Header title="Test Page" subtitle="This is Funnel Page" />
      <DateSelectComponent />
      <Box
        display="flex"
        justifyContent="center"
        maxHeight="600px"
        height="100%"
        width="90%"
        margin="auto"
      >
        <Funnel />
      </Box>
      <TestTable />
    </Box>
  );
}

export default FunnelChartPage;

