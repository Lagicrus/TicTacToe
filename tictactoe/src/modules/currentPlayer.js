import React from "react";
import {Box, IconButton, Tooltip, Typography} from "@mui/material";
import PropTypes from "prop-types";
import PeopleIcon from "@mui/icons-material/People";
import PersonIcon from "@mui/icons-material/Person";
import {styled} from "@mui/material/styles";

const StyledIconButton = styled(IconButton)({
  position: "absolute",
  top: 0,
  right: "25%",
  transform: "translate(-50%, 25%)"
});

function CurrentPlayer({isPlayer1Turn, is1PlayerMode, setIs1PlayerMode}) {
  const onClick = () => {
    setIs1PlayerMode(!is1PlayerMode);
  };
  return (
    <Box sx={{position: "relative"}}>
      <Typography variant="h3" textAlign="center" marginBottom={2}>
        {isPlayer1Turn ? "Player 1" : "Player 2"}
      </Typography>
      <Tooltip title={is1PlayerMode ? "1 Player Mode" : "2 Player Mode"} arrow>
        <StyledIconButton onClick={onClick}>
          {is1PlayerMode ? <PersonIcon/> : <PeopleIcon/>}
        </StyledIconButton>
      </Tooltip>
    </Box>
  );
}

CurrentPlayer.propTypes = {
  isPlayer1Turn: PropTypes.bool.isRequired,
  is1PlayerMode: PropTypes.bool.isRequired,
  setIs1PlayerMode: PropTypes.func.isRequired
};

export default CurrentPlayer;