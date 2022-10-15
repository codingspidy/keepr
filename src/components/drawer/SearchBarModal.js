import * as React from "react";
import { useContext } from "react";
import { Box, Modal, InputBase, IconButton, styled } from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";
import NoteContext from "../../context/NoteContextProvider";
import { display } from "@mui/system";

const style = {
  position: "absolute",
  top: "25%",
  left: "50%",
  width: "90%",
  maxWidth: "600px",
  transform: "translate(-50%, -50%)",
  boxShadow: "rgba(0, 0, 0, 0.16) 2px 2px 6px, rgba(0, 0, 0, 0.23) 2px 2px 6px",
  display: "flex",
  borderRadius: "4px",
};

const SearchModal = styled(Modal)(({ theme }) => ({
    zIndex: 100000000,
    [theme.breakpoints.up("sm")]: {
        display: "none",
      },
}));

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  color: "#6F707C",
  backgroundColor: "#f1f3f4",
  width: "100%",
  borderRadius: "4px 0 0 4px",
  [theme.breakpoints.up("sm")]: {
    width: "auto",
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1.5, 1, 1.5, 0),
    paddingLeft: `calc(1em + ${theme.spacing(1)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "30ch",
      "&:focus": {
        width: "35ch",
      },
    },
  },
}));

const SearchButton = styled(IconButton)(({ theme }) => ({
  background: "#000000",
  padding: "9px 11px",
  color: "#ffffff",
  borderRadius: "0 4px 4px 0",
  "&:hover": { background: "#000000" },
  [theme.breakpoints.up("sm")]: {
    padding: "9px 15px",
  },
}));

const SearchBarModal = () => {
  const { openSearchModal, handleCloseSearchModal } = useContext(NoteContext);

  return (
    <SearchModal
      open={openSearchModal}
      onClose={handleCloseSearchModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Search>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
        <SearchButton onClick={handleCloseSearchModal}>
          <SearchIcon />
        </SearchButton>
      </Box>
    </SearchModal>
  );
};

export default SearchBarModal;
