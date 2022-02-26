import React from "react";
import {Box} from "@mui/material";
import {styled} from "@mui/material/styles";

const ColouredBox = styled(Box)({
  height: "200px",
  backgroundColor: "pink",
  width: "200px"
});

function Cell({className}) {
  return (
    <ColouredBox/>
  );
}

export default Cell;