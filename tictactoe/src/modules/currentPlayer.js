import React from "react";
import {Typography} from "@mui/material";
import PropTypes from "prop-types";

function CurrentPlayer({isPlayer1Turn}){
  return (
    <Typography variant="h3" textAlign="center" marginBottom={2}>
      {isPlayer1Turn ? "Player 1" : "Player 2"}
    </Typography>
  );
}

CurrentPlayer.propTypes = {
  isPlayer1Turn: PropTypes.bool.isRequired
};

export default CurrentPlayer;