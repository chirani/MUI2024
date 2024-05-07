import { Box, List, ListItem, ListItemText } from "@mui/material";
import Typography from "@mui/material/Typography";

function SideMenu() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      sx={{
        padding: 3,
        background: "#F5f6f8",
        borderRight: 1,
        borderColor: "#bdbdbd",
      }}
    >
      <Typography variant="h5" gutterBottom>
        Disk Security
      </Typography>
      <Box
        flex="1"
        display="flex"
        flexDirection="column"
        justifyContent="space-around"
      >
        <List>
          <ListItem>
            <ListItemText primary="Google Drive" sx={{ fontWeight: "bold" }} />
          </ListItem>
          <ListItem>
            <ListItemText primary="One Drive" />
          </ListItem>
          <ListItem>
            <ListItemText primary="DropBox" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Box" />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}

export default SideMenu;
