import React from "react";
import {Box, Modal, Typography} from "@mui/material";
import PropTypes from "prop-types";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  outline: 0,
  backgroundColor: "background.paper",
  boxShadow: 24
};

function PopupMessage({popupMessage}) {
  return (
    <Modal
      open={popupMessage.length > 0}
      aria-labelledby="modal-title"
    >
      <Box sx={style}>
        <Typography id="modal-title" variant="h3">
          {popupMessage}
        </Typography>
      </Box>
    </Modal>
  );
}

PopupMessage.propTypes = {
  popupMessage: PropTypes.string.isRequired
};

export default PopupMessage;
