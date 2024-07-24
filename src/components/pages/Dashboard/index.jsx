import { Box } from "@mui/system";
import Header from "../../atoms/Header";

const Dashboard = () => {
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="ダッシュボード" subtitle="Welcome to React Admin" />
      </Box>
    </Box>
  );
}

export default Dashboard;
