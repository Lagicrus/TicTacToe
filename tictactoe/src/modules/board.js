import React from "react";
import {Grid} from "@mui/material";
import Cell from "./cell";

function Board() {
  return (
    <Grid container spacing={2}>
      <Cell/>
      <Cell/>
      <Cell/>
      <Cell/>
      <Cell/>
      <Cell/>
      <Cell/>
      <Cell/>
      <Cell/>
    </Grid>
  );
}

export default Board;