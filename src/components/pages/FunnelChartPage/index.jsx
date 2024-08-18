import { Box } from "@mui/system";
import Funnel from "../../organisms/diagrams/Funnel";

import TestTable from "../../organisms/tables/Test";

const FunnelChartPage = () => {
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
        <Funnel />
      </Box>
      <TestTable />
    </Box>
  );
}

export default FunnelChartPage;

