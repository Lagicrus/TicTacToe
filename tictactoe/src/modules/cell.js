import React from "react";
import {Box, Grid} from "@mui/material";
import {styled} from "@mui/material/styles";

const ColouredBox = styled(Box)({
  height: "273px",
  backgroundColor: "pink"
});

function Cell() {
  return (
    <Grid item xs={4}>
      <ColouredBox/>
    </Grid>
  );
}

export default Cell;