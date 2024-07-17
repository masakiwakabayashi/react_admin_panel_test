import { Box } from "@mui/system";
import { DataGrid } from "@mui/x-data-grid";
import Header from "../../common/atoms/Header";
import { mockDataUsers } from "../../../data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";

const Users = () => {
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "名前",
      flex: 1,
    },
    {
      field: "age",
      headerName: "年齢",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "phone",
      headerName: "電話番号",
      flex: 1,
    },
    {
      field: "email",
      headerName: "メールアドレス",
      flex: 1,
    },
  ];

  return (
    <Box m="20px">
      <Header title="ユーザ一覧" subtitle="Welcome to React Admin" />
      <Box>
        <DataGrid
          rows={mockDataUsers}
          columns={columns}
          checkboxSelection
        />
      </Box>
    </Box>
  );
}

export default Users;

