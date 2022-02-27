import React from "react";
import {Typography, useMediaQuery} from "@mui/material";
import PropTypes from "prop-types";

function Player({name, score, number, tie}) {
  const md = useMediaQuery((theme) => theme.breakpoints.up("md"));

  if (tie) {
    return (
      <div>
        <Typography variant={md ? "h4" : "h6"}>Tie</Typography>
        <Typography variant={md ? "h4" : "h6"} textAlign="center">{score}</Typography>
      </div>
    );
  }
  return (
    <div>
      <Typography variant={md ? "h4" : "h6"}>Player {number} ({name})</Typography>
      <Typography variant={md ? "h4" : "h6"} textAlign="center">{score}</Typography>
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