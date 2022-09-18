import { useContext } from "react";
import NoteItem from "./NoteItem";
import {
  List,
  Divider,
  Box,
  styled,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import NoteContext from "../../context/NoteContextProvider";

const style = {
  width: "100%",
  maxWidth: "900px",
  marginInline: "auto",
  marginBottom: "50px",
  paddingBlock: "15px",
  display: "flex",
  flexDirection: "column",
};

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 500,
      md: 700,
      lg: 1200,
      xl: 1536,
    },
  },
});

const NotesList = styled(List)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr",
  alignSelf: "center",
  [theme.breakpoints.up("md")]: {
    gridTemplateColumns: "repeat(2, 1fr)",
  },
  [theme.breakpoints.up("lg")]: {
    gridTemplateColumns: "repeat(3, 1fr)",
  },
}));

const NotesContainer = ({ handleModalOpen, page, itemsPerPage }) => {
  const { notesArr, handleModalClose, pinnedNotesArr } =
    useContext(NoteContext);

  return (
    <ThemeProvider theme={theme}>
      <Box sx={style}>
        <NotesList>
          {pinnedNotesArr
            .slice(0, 4)
            .slice((page - 1) * itemsPerPage, page * itemsPerPage)
            .map((note) => {
              return (
                <NoteItem
                  handleModalOpen={handleModalOpen}
                  handleModalClose={handleModalClose}
                  key={note.id}
                  id={note.id}
                  title={note.title}
                  body={note.body}
                />
              );
            })}
        </NotesList>
        {pinnedNotesArr.length > 0 && <Divider />}
        <NotesList>
          {notesArr
            .slice((page - 1) * itemsPerPage, page * itemsPerPage)
            .map((note) => {
              return (
                <NoteItem
                  handleModalOpen={handleModalOpen}
                  handleModalClose={handleModalClose}
                  key={note.id}
                  id={note.id}
                  title={note.title}
                  body={note.body}
                />
              );
            })}
        </NotesList>
      </Box>
    </ThemeProvider>
  );
};

export default NotesContainer;
