import React from "react";
import {Typography} from "@mui/material";
import PropTypes from "prop-types";

function Player({name, score, number, tie}) {
  if (tie) {
    return (
      <div>
        <Typography variant="h4">Tie</Typography>
        <Typography variant="h4" textAlign="center">{score}</Typography>
      </div>
    );
  }
  return (
    <div>
      <Typography variant="h4">Player {number} ({name})</Typography>
      <Typography variant="h4" textAlign="center">{score}</Typography>
    </div>
  );
}

Player.defaultProps = {
  tie: false
};

Player.propTypes = {
  name: PropTypes.string,
  score: PropTypes.number.isRequired,
  number: PropTypes.string,
  tie: PropTypes.bool
};

export default Player;