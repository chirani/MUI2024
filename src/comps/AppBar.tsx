import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function BasicAppBar() {
  return (
    <Box sx={{ borderBottom: 1, borderColor: "#bdbdbd" }}>
      <AppBar
        position="static"
        sx={{
          padding: 1,
          backgroundColor: "#F5f6f8",
        }}
        elevation={0}
      >
        <Toolbar>
          <Typography
            variant="h5"
            fontWeight="500"
            component="div"
            color="#202020"
            sx={{ flexGrow: 1 }}
          >
            Google Drive
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
