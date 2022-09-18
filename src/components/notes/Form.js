import { useContext } from "react";
import { TextField, ClickAwayListener, Button, styled } from "@mui/material";
import NoteContext from "../../context/NoteContextProvider";
import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@mui/material/styles";

let theme = createTheme();
theme = responsiveFontSizes(theme);

const Container = styled("form")({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  marginInline: "auto",
  marginBottom: "0.5em",
  marginTop: "1em",
  boxShadow: "rgba(0, 0, 0, 0.16) 2px 2px 6px, rgba(0, 0, 0, 0.23) 2px 2px 6px",
  border: "1px solid #e0e0e0",
  width: "80%",
  maxWidth: "590px",
  borderRadius: "4px",
  padding: "5px 15px",
  [theme.breakpoints.up("sm")]: {
    padding: "7px 15px",
    marginTop: "2em",
    width: "75%",
  },
});

const SaveButton = styled(Button)({
  color: "#4a4a4a",
  borderColor: "#4a4a4a",
   marginTop: "20px", 
   alignSelf: "end",
  "&:hover": {
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
    <ThemeProvider theme={theme}>
      <ClickAwayListener onClickAway={handleClickAway}>
        <Container
          onSubmit={(e) => {
            e.preventDefault();
            handleClickAway();
          }}
        >
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
              variant="outlined"
            >
              Save
            </SaveButton>
          )}
        </Container>
      </ClickAwayListener>
    </ThemeProvider>
  );
};

export default Form;
