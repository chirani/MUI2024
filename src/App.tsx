import Paginations from "./comps/Pagination";
import BasicAppBar from "./comps/AppBar";
import BasicTable from "./comps/Table";
import { Box } from "@mui/material";
import SideMenu from "./comps/SideMenu";
function App() {
  return (
    <>
      <Box display="flex" flexDirection="row" height="100vh">
        <SideMenu />
        <Box display="flex" flexDirection="column" flex={1}>
          <BasicAppBar />
          <Box
            display="flex"
            flex={1}
            flexDirection="column"
            justifyContent="space-between"
            sx={{
              padding: 7,
              alignItems: "center",
            }}
          >
            <BasicTable />
            <Box flexGrow={1} />
            <Paginations />
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default App;
