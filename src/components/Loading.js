import { Box, CircularProgress } from "@mui/material";

const Loading = () => (
  <Box sx={{ display: "flex", justifyContent: "center" }}>
    <CircularProgress />
  </Box>
);
export default Loading;
