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

function Cell({handlePlayClick, row, column, items}) {
  const onClick = () => {
    handlePlayClick(row, column);
  };

  const currentCell = items[row][column];


  return (
    <ColouredBox
      onClick={onClick}
    >
      {currentCell === 1 && <CloseIcon className={icon} fontSize="inherit"/>}
      {currentCell === 2 && <CircleOutlinedIcon className={icon} fontSize="inherit"/>}
    </ColouredBox>
  );
}

Cell.propTypes = {
  handlePlayClick: PropTypes.func.isRequired,
  row: PropTypes.number.isRequired,
  column: PropTypes.number.isRequired,
  items: PropTypes.array.isRequired
};

export default Cell;