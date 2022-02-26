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

function Board({handlePlayClick, items}) {
  return (
    <div>
      <ColouredBack>
        <Row>
          <Cell handlePlayClick={handlePlayClick} row={0} column={0} items={items}/>
          <Cell handlePlayClick={handlePlayClick} row={0} column={1} items={items}/>
          <Cell handlePlayClick={handlePlayClick} row={0} column={2} items={items}/>
        </Row>
        <Row>
          <Cell handlePlayClick={handlePlayClick} row={1} column={0} items={items}/>
          <Cell handlePlayClick={handlePlayClick} row={1} column={1} items={items}/>
          <Cell handlePlayClick={handlePlayClick} row={1} column={2} items={items}/>
        </Row>
        <Row>
          <Cell handlePlayClick={handlePlayClick} row={2} column={0} items={items}/>
          <Cell handlePlayClick={handlePlayClick} row={2} column={1} items={items}/>
          <Cell handlePlayClick={handlePlayClick} row={2} column={2} items={items}/>
        </Row>
      </ColouredBack>
    </div>
  );
}

Board.propTypes = {
  handlePlayClick: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired
};

export default Board;