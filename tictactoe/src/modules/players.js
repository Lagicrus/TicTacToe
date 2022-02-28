import React from "react";
import Player from "./player";
import styles from "./players.module.css";
import PropTypes from "prop-types";

const {row} = styles;

// Wrapper for displaying the current players and their scores
function Players({player1Score, player2Score, tieScore}) {
  return (
    <div className={row}>
      <Player number="1" name="X" score={player1Score}/>
      <Player tie score={tieScore}/>
      <Player number="2" name="0" score={player2Score}/>
    </div>
  );
}

Players.propTypes = {
  player1Score: PropTypes.number.isRequired,
  player2Score: PropTypes.number.isRequired,
  tieScore: PropTypes.number.isRequired
};

export default Players;