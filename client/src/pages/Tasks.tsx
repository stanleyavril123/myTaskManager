import React from "react";
import { Box } from "@mui/material";
import ActionButton from "../components/Tasks/ActionButton.tsx";

const Tasks: React.FC = () => {
  return (
    <Box sx={{ marginLeft: "80px" }}>
      <h1>Task Page</h1>
      <ActionButton/>
    </Box>
  );
};

export default Tasks;
