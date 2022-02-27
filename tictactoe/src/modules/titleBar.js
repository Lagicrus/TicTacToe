import React from "react";
import PropTypes from "prop-types";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import PeopleIcon from "@mui/icons-material/People";
import PersonIcon from "@mui/icons-material/Person";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import styles from "./titleBar.module.css";
import {styled} from "@mui/material/styles";
import {useMediaQuery} from "@mui/material";

const {row} = styles;

const StyledIconButton = styled(IconButton)({
  top: "50%",
  transform: "translateY(-50%)"
});

function TitleBar({isPlayer1Turn, is1PlayerMode, setIs1PlayerMode, resetBoard}) {
  const md = useMediaQuery((theme) => theme.breakpoints.up("md"));
  const onClick = () => {
    setIs1PlayerMode(!is1PlayerMode);
  };
  return (
    <Grid container spacing={3} className={row}>
      <Grid item>
        <Tooltip title="Reset Board & Scores" arrow>
          <StyledIconButton onClick={resetBoard}>
            <RestartAltIcon/>
          </StyledIconButton>
        </Tooltip>
      </Grid>
      <Grid item>
        <Typography variant={md ? "h3" : "h5"} textAlign="center" marginBottom={2}>
          {isPlayer1Turn ? "Player 1" : "Player 2"}
        </Typography>
      </Grid>
      <Grid item>
        <Tooltip title={is1PlayerMode ? "1 Player Mode" : "2 Player Mode"} arrow>
          <StyledIconButton onClick={onClick}>
            {is1PlayerMode ? <PersonIcon/> : <PeopleIcon/>}
          </StyledIconButton>
        </Tooltip>
      </Grid>
    </Grid>
  );
}

TitleBar.propTypes = {
  isPlayer1Turn: PropTypes.bool.isRequired,
  is1PlayerMode: PropTypes.bool.isRequired,
  setIs1PlayerMode: PropTypes.func.isRequired,
  resetBoard: PropTypes.func.isRequired
};

export default TitleBar;