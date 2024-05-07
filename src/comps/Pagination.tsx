import Pagination from "@mui/material/Pagination";
import { Stack } from "@mui/material";

export default function Paginations() {
  return (
    <Stack>
      <Pagination
        size="medium"
        count={3}
        variant="text"
        sx={{ marginLeft: "auto" }}
      />
    </Stack>
  );
}
