import React from "react";
import Cell from "./cell";
import {styled} from "@mui/material/styles";
import PropTypes from "prop-types";

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

function Board({isPlayer1Turn, setIsPlayer1Turn}) {
  return (
    <div>
      <ColouredBack>
        <Row>
          <Cell isPlayer1Turn={isPlayer1Turn} setIsPlayer1Turn={setIsPlayer1Turn}/>
          <Cell isPlayer1Turn={isPlayer1Turn} setIsPlayer1Turn={setIsPlayer1Turn}/>
          <Cell isPlayer1Turn={isPlayer1Turn} setIsPlayer1Turn={setIsPlayer1Turn}/>
        </Row>
        <Row>
          <Cell isPlayer1Turn={isPlayer1Turn} setIsPlayer1Turn={setIsPlayer1Turn}/>
          <Cell isPlayer1Turn={isPlayer1Turn} setIsPlayer1Turn={setIsPlayer1Turn}/>
          <Cell isPlayer1Turn={isPlayer1Turn} setIsPlayer1Turn={setIsPlayer1Turn}/>
        </Row>
        <Row>
          <Cell isPlayer1Turn={isPlayer1Turn} setIsPlayer1Turn={setIsPlayer1Turn}/>
          <Cell isPlayer1Turn={isPlayer1Turn} setIsPlayer1Turn={setIsPlayer1Turn}/>
          <Cell isPlayer1Turn={isPlayer1Turn} setIsPlayer1Turn={setIsPlayer1Turn}/>
        </Row>
      </ColouredBack>
    </div>
  );
}

Board.propTypes = {
  isPlayer1Turn: PropTypes.bool.isRequired,
  setIsPlayer1Turn: PropTypes.func.isRequired
};

export default Board;