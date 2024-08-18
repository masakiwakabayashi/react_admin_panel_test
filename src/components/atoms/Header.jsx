import { Typography, Box } from "@mui/material";

const Header = ({ title, subtitle }) => {
  return (
    <Box m="20px 30px">
      <Typography
        variant="h4"
        color="black"
        fontWeight="bold"
        sx={{ m: "0 0 5px 0" }}
      >
        {title}
      </Typography>
      <Typography variant="h6" color="black" ml={1}>
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Header;
