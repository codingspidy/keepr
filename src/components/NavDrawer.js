import * as React from "react";
import { useContext } from "react";
import { styled, Box, Drawer as MuiDrawer } from "@mui/material";

import HeaderBar from "./HeaderBar";
import NavList from "./NavList";
import NoteContext from "../context/NoteContextProvider";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "isDrawerOpen",
})(({ theme, isDrawerOpen }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(isDrawerOpen && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!isDrawerOpen && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const NavDrawer = () => {
  const { isDrawerOpen, handleDrawer } = useContext(NoteContext);
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <HeaderBar isDrawerOpen={isDrawerOpen} handleDrawer={handleDrawer} />
      <DrawerHeader />
      <Drawer variant="permanent" isDrawerOpen={isDrawerOpen}>
        <DrawerHeader></DrawerHeader>
        <NavList />
      </Drawer>
    </Box>
  );
};

export default NavDrawer;
