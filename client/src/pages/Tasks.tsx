import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import ActionButton from "../components/Tasks/ActionButton.tsx";
import TaskForm from "../components/Tasks/TaskForm.tsx";
import { Task } from "../types.ts";
import TaskCard from "../components/Tasks/TaskCard.tsx";
import { useSidebar } from "../components/Sidebar/SidebarContext.tsx";

const Tasks: React.FC = () => {
  const { isOpen } = useSidebar();
  const [formIsOpen, setFormIsOpen] = useState<true | false>(false);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loding, setLoding] = useState<boolean>(true);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch("http://localhost:8080/tasks");
        if (!response.ok) {
          throw new Error("failed to fetch tasks");
        }
        const data: Task[] = await response.json();
        setTasks(data);
      } catch (error) {
        console.log("Error fetching tasks:", error);
      } finally {
        setLoding(false);
      }
    };
    fetchTasks();
  }, []);

  const toggleForm = () => {
    setFormIsOpen((formIsOpen) => !formIsOpen);
  };
  if (loding) return <div>Loding tasks ...</div>;
  return (
    <Box
      sx={{
        marginLeft: isOpen ? "300px" : "80px",
        transition: "margin-left 0.2s ease-in-out",
        position: "relative",
        p: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mb: 2,
        }}
      >
        <Typography variant="h4">All Tasks</Typography>
        <ActionButton onClick={toggleForm} />
      </Box>

      {formIsOpen && <TaskForm />}

      <Grid container spacing={2}>
        {tasks.map((task, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <TaskCard task={task} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Tasks;
