import React from "react";
import {Box} from "@mui/material";
import {styled} from "@mui/material/styles";
import PropTypes from "prop-types";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import CloseIcon from "@mui/icons-material/Close";
import styles from "./cell.module.css";

const {icon} = styles;

const ColouredBox = styled(Box)(({theme}) => ({
  height: "200px",
  backgroundColor: theme.palette.grey["900"],
  width: "200px",
  position: "relative",
  fontSize: 96
}));

function Cell({isPlayer1Turn, setIsPlayer1Turn}) {
  const [playerClicked, setPlayerClicked] = React.useState(0);

  const onClick = () => {
    setPlayerClicked(isPlayer1Turn ? 1 : 2);
    setIsPlayer1Turn(!isPlayer1Turn);
  };

  return (
    <ColouredBox
      onClick={onClick}
    >
      {playerClicked === 1 && <CloseIcon className={icon} fontSize="inherit"/>}
      {playerClicked === 2 && <CircleOutlinedIcon className={icon} fontSize="inherit"/>}
    </ColouredBox>
  );
}

Cell.propTypes = {
  isPlayer1Turn: PropTypes.bool.isRequired,
  setIsPlayer1Turn: PropTypes.func.isRequired
};

export default Cell;