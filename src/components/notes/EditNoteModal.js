import * as React from "react";
import { TextField, Modal, Box, Button, styled } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  maxWidth: "400px",
  bgcolor: "background.paper",
  display: "flex",
  flexDirection: "column",
  boxShadow: "rgba(0, 0, 0, 0.16) 2px 2px 6px, rgba(0, 0, 0, 0.23) 2px 2px 6px",
  border: "1px solid #e0e0e0",
  padding: "7px 15px",
  borderRadius: "6px",
};

const SaveButton = styled(Button)({
  color: "#4a4a4a",
  borderColor: "#4a4a4a",
  marginTop: "20px", 
  alignSelf: "end",
  '&:hover': {
  color: "#ffffff",
  borderColor: "#000000",
  background: "#000000",
},
});

export default function EditNoteModal({
  openModal,
  handleModalClose,
  currentNoteTitle,
  currentNoteBody,
  handleTitleEdit,
  handleBodyEdit,
}) {
  return (
    <div>
      <Modal
        open={openModal}
        onClose={handleModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ zIndex: 100000000 }}
      >
        <Box sx={style}>
          <TextField
            placeholder="Title"
            variant="standard"
            InputProps={{ disableUnderline: true }}
            name="heading"
            onChange={handleTitleEdit}
            value={currentNoteTitle}
            sx={{ fontSize: "1.5rem", marginBottom: "5px" }}
          />
          <TextField
            placeholder="Take a note..."
            multiline
            maxRows={Infinity}
            variant="standard"
            InputProps={{ disableUnderline: true }}
            name="text"
            onChange={handleBodyEdit}
            value={currentNoteBody}
          />
           <SaveButton
          type="submit"
            onClick={handleModalClose}
            variant="outlined"
          >
            Save
          </SaveButton>
        </Box>
      </Modal>
    </div>
  );
}
