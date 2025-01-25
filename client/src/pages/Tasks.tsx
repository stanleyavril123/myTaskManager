import React, { useState } from "react";
import { Box } from "@mui/material";
import ActionButton from "../components/Tasks/ActionButton.tsx";
import TaskForm from "../components/Tasks/TaskForm.tsx";


const Tasks: React.FC = () => {
const [formIsOpen, setFormIsOpen] = useState<true | false>(false);

const toggleForm = () => {
  setFormIsOpen((formIsOpen) => !formIsOpen)
}
  return (
    <Box sx={{ marginLeft: "80px" }}>
      <h1>Task Page</h1>
      <ActionButton onClick={toggleForm}/>
      {formIsOpen && <TaskForm />}
    </Box>
  );
};

export default Tasks;
