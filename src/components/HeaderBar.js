import * as React from "react";
import {
  Box,
  AppBar,
  styled,
  Toolbar,
  IconButton,
  InputBase,
} from "@mui/material";
import { Menu as MenuIcon, Search as SearchIcon } from "@mui/icons-material";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "4px 0 0 4px",
  color: "#6F707C",
  backgroundColor: "#f1f3f4",
  width: "100%",
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

const SearchButton = styled(IconButton)({
  background: "#000000",
  borderRadius: "0 4px 4px 0",
  paddingInline: "15px",
  color: "#ffffff",
  "&:hover": { background: "#000000" },
});

export default function HeaderBar({ isDrawerOpen, handleDrawer }) {
  return (
    <AppBar
      position="fixed"
      sx={{
        zIndex: "1000000",
        background: "#ffffff",
        boxShadow: "inset 0 -1px 0 0 #dadce0",
      }}
    >
      <Toolbar>
        <IconButton onClick={handleDrawer} edge="start">
          <MenuIcon />
        </IconButton>
        <img src="images/Keepr-2.png" alt="logo" />
        <Box
          sx={{
            display: "flex",
            gap: ".3em",
            position: "absolute",
            right: "20px",
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
        </Box>
      </Toolbar>
    </AppBar>
  );
}
