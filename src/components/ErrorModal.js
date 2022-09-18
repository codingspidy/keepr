import * as React from 'react';
import { useContext } from 'react';
import { Box, Typography, Modal, IconButton, styled } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import NoteContext from '../context/NoteContextProvider';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "75%",
  maxWidth: "400px",
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const CloseButton = styled(IconButton)({
    position: "absolute",
    top: "10px",
    right: "10px",
    color: "#000000",
})

const ErrorModal = ({ errorTitle, errorMessage }) => {
  const { openErrorModal, handleCloseErrorModal } = useContext(NoteContext);

  return (
    <div>
      <Modal
        open={openErrorModal}
        onClose={handleCloseErrorModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{  zIndex: 100000000}}
      >
        <Box sx={style}>
          <Typography variant="h6" component="h2">
            {errorTitle}
          </Typography>
          <Typography sx={{ mt: 2 }}>
            {errorMessage}
          </Typography>
          <CloseButton onClick={handleCloseErrorModal}>
             <CloseIcon size="small" />
          </CloseButton>
        </Box>
      </Modal>
    </div>
  );
}

export default ErrorModal;