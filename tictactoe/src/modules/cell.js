import React from "react";
import {Box} from "@mui/material";
import {styled} from "@mui/material/styles";

const ColouredBox = styled(Box)(({theme}) => ({
  height: "200px",
  backgroundColor: theme.palette.grey["900"],
  width: "200px"
}));

function Cell() {
  return (
    <ColouredBox/>
  );
}

export default Cell;