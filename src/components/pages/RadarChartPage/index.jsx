import { Box } from "@mui/system";
import Radar from "../../organisms/diagrams/Radar";
import TestTable from "../../organisms/tables/Test";

const RadarChartPage = () => {
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
        <Radar />
      </Box>
      <TestTable />
    </Box>
  );
}

export default RadarChartPage;

