import * as React from "react";
import { AppBar, Toolbar, IconButton, styled } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import SearchBar from "./SearchBar";

const Logo = styled("div")(({ theme }) => ({
  "& img": {
    width: "85px",
    [theme.breakpoints.up("sm")]: {
      width: "100%",
    },
  },
  display: "flex",
  alignItems: "center",
}));

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
        <IconButton sx={{ zIndex: 100000 }} onClick={handleDrawer} edge="start">
          <MenuIcon />
        </IconButton>
        <Logo>
          <img src="images/Keepr-2.png" alt="logo" />
        </Logo>
        <SearchBar />
      </Toolbar>
    </AppBar>
  );
}
