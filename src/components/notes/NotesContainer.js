import { useContext } from "react";
import NoteItem from "./NoteItem";
import { List, Divider, Box, styled } from "@mui/material";
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

const NotesList = styled(List)({
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  // alignItems: "start",
  alignSelf: "center",
});

const NotesContainer = ({ handleModalOpen, page, itemsPerPage }) => {
  const { notesArr, handleModalClose, pinnedNotesArr } =
    useContext(NoteContext);

  return (
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
  );
};

export default NotesContainer;
