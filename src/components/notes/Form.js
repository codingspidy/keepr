import { useContext } from "react";
import { Box, TextField, ClickAwayListener, Button, styled } from "@mui/material";
import NoteContext from "../../context/NoteContextProvider";

const Container = styled("form")({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  marginInline: "auto",
  marginBottom: "0.5em",
  boxShadow: "rgba(0, 0, 0, 0.16) 2px 2px 6px, rgba(0, 0, 0, 0.23) 2px 2px 6px",
  border: "1px solid #e0e0e0",
  width: "90%",
  maxWidth: "590px",
  borderRadius: "6px",
  minHeight: "30px",
  padding: "7px 15px",
});
 
const SaveButton = styled(Button)({
  color: "#4a4a4a",
  borderColor: "#4a4a4a",
  '&:hover': {
  color: "#ffffff",
  borderColor: "#000000",
  background: "#000000",
},
});
 
const Form = () => {
  const {
    noteTitle,
    noteBody,
    handleNoteTitleChange,
    handleNoteBodyChange,
    onTextAreaClick,
    showTextField,
    handleClickAway,
  } = useContext(NoteContext);

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <Container onSubmit={(e) => {e.preventDefault(); handleClickAway()}}>
        {showTextField && (
          <TextField
            placeholder="Title"
            variant="standard"
            InputProps={{ disableUnderline: true }}
            name="heading"
            onChange={handleNoteTitleChange}
            value={noteTitle}
          />
        )}
        <TextField
          placeholder="Take a note..."
          multiline
          maxRows={Infinity}
          variant="standard"
          InputProps={{ disableUnderline: true }}
          onClick={onTextAreaClick}
          name="text"
          onChange={handleNoteBodyChange}
          value={noteBody}
        />
        {showTextField && (
          <SaveButton
          type="submit"
            // onClick={handleClickAway}
            sx={{ marginTop: "7px", alignSelf: "end" }}
            variant="outlined"
          >
            Save
          </SaveButton>
        )}
      </Container>
    </ClickAwayListener>
  );
};

export default Form;
