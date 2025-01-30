import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import ActionButton from "../components/Tasks/ActionButton.tsx";
import TaskForm from "../components/Tasks/TaskForm.tsx";
import { Task } from "../types.ts";
import TaskCard from "../components/Tasks/TaskCard.tsx";

const Tasks: React.FC = () => {
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
    <Box sx={{ marginLeft: "80px" }}>
      <h1>Task Page</h1>
      <ActionButton onClick={toggleForm} />
      {formIsOpen && <TaskForm />}
      <h1>All Tasks</h1>
      {tasks.map((task, index) => (
        <div key={index}>
          <TaskCard task={task} />
        </div>
      ))}
    </Box>
  );
};

export default Tasks;
