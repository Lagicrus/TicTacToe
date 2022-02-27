import React from "react";
import {useMediaQuery} from "@mui/material";
import Box from "@mui/material/Box";
import {styled} from "@mui/material/styles";
import PropTypes from "prop-types";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import CloseIcon from "@mui/icons-material/Close";
import styles from "./cell.module.css";
import clsx from "clsx";

const {icon, mdCell, smCell, xsmCell} = styles;

const ColouredBox = styled(Box)(({theme}) => ({
  backgroundColor: theme.palette.grey["900"],
  position: "relative"
}));

function Cell({handlePlayClick, row, column, items, disabled}) {
  const onClick = () => {
    if(disabled) {
      return;
    }
    handlePlayClick(row, column);
  };

  const currentCell = items[row][column];

  const md = useMediaQuery((theme) => theme.breakpoints.up("md"));
  const sm = useMediaQuery((theme) => theme.breakpoints.only("sm"));
  const xsm = useMediaQuery((theme) => theme.breakpoints.only("xs"));

  return (
    <ColouredBox
      onClick={onClick}
      className={clsx(md && mdCell, sm && smCell, xsm && xsmCell)}
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
  items: PropTypes.array.isRequired,
  disabled: PropTypes.bool.isRequired
};

export default Cell;