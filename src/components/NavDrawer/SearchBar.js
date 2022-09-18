import { useContext } from 'react';
import { styled, InputBase, Box, IconButton } from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";
import NoteContext from "../../context/NoteContextProvider";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  color: "#6F707C",
  backgroundColor: "#f1f3f4",
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    borderRadius: "4px 0 0 4px",
    width: "auto",
  },
}));

const SearchModalCta = styled(IconButton)(({ theme }) => ({
  background: "#000000",
  borderRadius: "2px",
  padding: "7px 8px",
  color: "#ffffff",
  "&:hover": { background: "#000000" },
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1.5, 1, 1.5, 0),
    paddingLeft: `calc(1em + ${theme.spacing(1)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
      width: "30ch",
      "&:focus": {
        width: "35ch",
      },
    },
  },
}));

const SearchButton = styled(IconButton)(({ theme }) => ({
  background: "#000000",
  color: "#ffffff",
  display: "none",
  "&:hover": { background: "#000000" },
  [theme.breakpoints.up("sm")]: {
    display: "flex",
    borderRadius: "0 4px 4px 0",
    padding: "9px 15px",
  },
}));

const SearchBar = () => {
  const { handleOpenSearchModal } = useContext(NoteContext);

  return (
    <Box
      sx={{
        display: "flex",
        gap: ".3em",
        position: "absolute",
        right: "14px",
      }}
    >
      <Search>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
        />
      </Search>
      <SearchButton>
        <SearchIcon />
      </SearchButton>
      <SearchModalCta onClick={handleOpenSearchModal}>
        <SearchIcon />
      </SearchModalCta>
    </Box>
  );
};

export default SearchBar;
