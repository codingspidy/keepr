import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";

import NavDrawer from "../components/drawer/NavDrawer";
import Notes from "./Notes";
import Archives from "./Archives";
import DeleteNotes from "./DeleteNote";

const Home = () => {
  return (
    <Box style={{ display: "flex", flexDirection: "column", width: "100%" }}>
      <Router>
        <NavDrawer />
        <Routes>
          <Route path="/" element={<Notes />} />
          <Route path="/archive" element={<Archives />} />
          <Route path="/delete" element={<DeleteNotes />} />
        </Routes>
      </Router>
    </Box>
  );
};

export default Home;
