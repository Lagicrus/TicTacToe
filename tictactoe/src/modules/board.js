import React from "react";
import Cell from "./cell";
import {styled} from "@mui/material/styles";

const ColouredBack = styled("div")({
  backgroundColor: "white",
  width: "fit-content",
  margin: "0 auto"
});

const Row = styled("div")({
  display: "flex",
  flexDirection: "row",
  gap: 10,
  marginBottom: 10
});

function Board() {
  return (
    <div>
      <ColouredBack>
        <Row>
          <Cell/>
          <Cell/>
          <Cell/>
        </Row>
        <Row>
          <Cell/>
          <Cell/>
          <Cell/>
        </Row>
        <Row>
          <Cell/>
          <Cell/>
          <Cell/>
        </Row>
      </ColouredBack>
    </div>
  );
}

export default Board;