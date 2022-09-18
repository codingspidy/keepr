import { Box, styled, Pagination } from "@mui/material";
import { useContext, useState } from "react";
import NoteContext from "../../context/NoteContextProvider";

import Form from "./Form";
import NotesContainer from "./NotesContainer";
import EditNoteModal from "./EditNoteModal";
import ErrorModal from "../ErrorModal";
import SearchBarModal from "../NavDrawer/SearchBarModal";

const drawerWidth = "240px";

const MainContainer = styled(Box, {
  shouldForwardProp: (prop) => prop !== "isDrawerOpen",
})(({ theme, isDrawerOpen }) => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  minHeight: "74vh",
  maxWidth: "1000px",
  padding: "3em 0",
  marginInline: "auto",
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  [theme.breakpoints.up("sm")]: {
    padding: "2em",
    ...(isDrawerOpen && {
      marginInline: 0,
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  },
  [theme.breakpoints.up("sm")]: {
    padding: "3em 2em",
  },
 
}));

const paginationStyle = {
  position: "absolute",
  bottom: "1vh",
  left: "50%",
  transform: "translate(-50%, 0)",
  padding: "20px",
  marginInline: "auto",
};

const Notes = () => {
  const {
    isDrawerOpen,
    currentNoteTitle,
    setCurrentNoteTitle,
    currentNoteBody,
    setCurrentNoteBody,
    openModal,
    setOpenModal,
    handleModalClose,
    setCurrentNoteId,
    pinnedNotesArr,
  } = useContext(NoteContext);

  const [page, setPage] = useState(1);
  const [noOfPages] = useState(3);

  const handleTitleEdit = (e) => {
    setCurrentNoteTitle(e.target.value);
  };

  const handleBodyEdit = (e) => {
    setCurrentNoteBody(e.target.value);
  };

  const handleModalOpen = (id, title, body) => {
    setOpenModal(true);
    setCurrentNoteTitle(title);
    setCurrentNoteBody(body);
    setCurrentNoteId(id);
  };

  let itemsPerPage = 6;
  if (pinnedNotesArr.length > 0) {
    itemsPerPage = itemsPerPage - pinnedNotesArr.length;
  }

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  return (
    <MainContainer isDrawerOpen={isDrawerOpen}>
      <SearchBarModal />
      <ErrorModal
        errorTitle="Error!"
        errorMessage="Only 3 notes can be pinned"
      />
      <EditNoteModal
        handleTitleEdit={handleTitleEdit}
        handleBodyEdit={handleBodyEdit}
        openModal={openModal}
        handleModalClose={handleModalClose}
        currentNoteTitle={currentNoteTitle}
        currentNoteBody={currentNoteBody}
      />
      <Form />
      <NotesContainer
        handleModalOpen={handleModalOpen}
        page={page}
        itemsPerPage={itemsPerPage}
      />
      <Box sx={paginationStyle}>
        <Pagination
          count={noOfPages}
          page={page}
          onChange={handlePageChange}
          defaultPage={1}
          size="small"
          showFirstButton
          showLastButton
          sx={{ width: "250px", display: "flex", justifyContent: "center" }}
        />
      </Box>
    </MainContainer>
  );
};

export default Notes;
