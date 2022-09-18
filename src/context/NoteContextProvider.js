import React, { useState } from "react";
import { v4 as uuid } from "uuid";

const NoteContext = React.createContext();

export const NoteContextProvider = (props) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const [showTextField, setShowTextField] = useState(false);

  const [notesArr, setNotesArr] = useState([]);
  const [noteTitle, setNoteTitle] = useState("");
  const [noteBody, setNoteBody] = useState("");

  const [openModal, setOpenModal] = useState(false);
  const [currentNoteTitle, setCurrentNoteTitle] = useState("");
  const [currentNoteBody, setCurrentNoteBody] = useState("");
  const [currentNoteId, setCurrentNoteId] = useState("");

  const [pinnedNotesArr, setPinnedNotesArr] = useState([]);

  const [openErrorModal, setOpenErrorModal] = useState(false);

  const [openSearchModal, setOpenSearchModal] = useState(false);

  const handleDrawer = () => {
    setIsDrawerOpen((prevState) => !prevState);
  };

  const onTextAreaClick = () => {
    setShowTextField(true);
  };

  const handleNoteTitleChange = (e) => {
    setNoteTitle(e.target.value);
  };

  const handleNoteBodyChange = (e) => {
    setNoteBody(e.target.value);
  };

  const handleModalClose = () => {
    setOpenModal(false);
    notesArr.map((note) => {
      if (note.id === currentNoteId) {
        note.title = currentNoteTitle;
        note.body = currentNoteBody;
      }
      return note;
    });
  };

  const handlePinClick = (e,id) => {
    notesArr.map((note) => {
      if (note.id === id) {
        if (pinnedNotesArr.length >= 3) {
          setPinnedNotesArr((prev) => [...prev]);
          handleOpenErrorModal();
          return note;
        }
        setPinnedNotesArr((prev) => {
          return [...prev, note];
        });
      }
      
      const filteredArr = notesArr.filter((note) => note.id !== id);
      if (pinnedNotesArr.length < 3) {
        setNotesArr(filteredArr);
      }
      return note;
    });
    
  };

  const handleClickAway = () => {
    setShowTextField(false);
    if (noteTitle.length !== 0 || noteBody.length !== 0) {
      setNotesArr((prev) => {
        return [{ id: uuid(), title: noteTitle, body: noteBody }, ...prev];
      });
    }
    setNoteTitle("");
    setNoteBody("");
  };

  const handleOpenErrorModal = () => setOpenErrorModal(true);
  const handleCloseErrorModal = () => setOpenErrorModal(false);

  const handleOpenSearchModal = () => setOpenSearchModal(true);
  const handleCloseSearchModal = () => setOpenSearchModal(false);

  return (
    <NoteContext.Provider
      value={{
        isDrawerOpen,
        setIsDrawerOpen,
        handleDrawer,
        showTextField,
        setShowTextField,
        onTextAreaClick,
        notesArr,
        setNotesArr,
        noteTitle,
        setNoteTitle,
        noteBody,
        setNoteBody,
        handleNoteTitleChange,
        handleNoteBodyChange,
        openModal,
        setOpenModal,
        handleModalClose,
        currentNoteTitle,
        setCurrentNoteTitle,
        currentNoteBody,
        setCurrentNoteBody,
        setCurrentNoteId,
        pinnedNotesArr,
        handlePinClick,
        handleClickAway,
        openErrorModal,
        handleOpenErrorModal,
        handleCloseErrorModal,
        openSearchModal,
        handleOpenSearchModal,
        handleCloseSearchModal,
      }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteContext;
