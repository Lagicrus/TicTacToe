import React from "react";
import {Box, IconButton, Tooltip, Typography} from "@mui/material";
import PropTypes from "prop-types";
import PeopleIcon from "@mui/icons-material/People";
import PersonIcon from "@mui/icons-material/Person";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import {styled} from "@mui/material/styles";

const StyledIconButtonRight = styled(IconButton)({
  position: "absolute",
  top: 0,
  right: "25%",
  transform: "translate(-50%, 25%)"
});

const StyledIconButtonLeft = styled(IconButton)({
  position: "absolute",
  top: 0,
  left: "25%",
  transform: "translate(-50%, 25%)"
});

function TitleBar({isPlayer1Turn, is1PlayerMode, setIs1PlayerMode, resetBoard}) {
  const onClick = () => {
    setIs1PlayerMode(!is1PlayerMode);
  };
  return (
    <Box sx={{position: "relative"}}>
      <Tooltip title="Reset Board & Scores" arrow>
        <StyledIconButtonLeft onClick={resetBoard}>
          <RestartAltIcon />
        </StyledIconButtonLeft>
      </Tooltip>
      <Typography variant="h3" textAlign="center" marginBottom={2}>
        {isPlayer1Turn ? "Player 1" : "Player 2"}
      </Typography>
      <Tooltip title={is1PlayerMode ? "1 Player Mode" : "2 Player Mode"} arrow>
        <StyledIconButtonRight onClick={onClick}>
          {is1PlayerMode ? <PersonIcon/> : <PeopleIcon/>}
        </StyledIconButtonRight>
      </Tooltip>
    </Box>
  );
}

TitleBar.propTypes = {
  isPlayer1Turn: PropTypes.bool.isRequired,
  is1PlayerMode: PropTypes.bool.isRequired,
  setIs1PlayerMode: PropTypes.func.isRequired,
  resetBoard: PropTypes.func.isRequired
};

export default TitleBar;