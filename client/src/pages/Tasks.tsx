import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
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
  const groupedTasks: { [key: string]: Task[] } = tasks.reduce(
    (acc, task) => {
      if (!acc[task.dueDate]) {
        acc[task.dueDate] = [];
      }
      acc[task.dueDate].push(task);
      return acc;
    },
    {} as { [key: string]: Task[] },
  );

  const sortedDates = Object.keys(groupedTasks).sort(
    (a, b) =>
      new Date(a + "T00:00:00").getTime() - new Date(b + "T00:00:00").getTime(),
  );

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

      {sortedDates.map((dueDate) => {
        // Convert "YYYY-MM-DD" to local date
        const localDate = new Date(dueDate + "T00:00:00");

        return (
          <Box
            key={dueDate}
            sx={{
              width: "100vw",
              maxWidth: "100%",
              padding: "16px 0",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              borderBottom: "2px solid rgba(255,255,255,0.2)",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontWeight: "bold",
                textTransform: "uppercase",
                padding: "12px",
              }}
            >
              {localDate.toDateString()}
            </Typography>

            {groupedTasks[dueDate].map((task, index, arr) => (
              <Box
                key={index}
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <TaskCard
                  key={index}
                  task={task}
                  isFirst={index === 0}
                  isLast={index === arr.length - 1}
                />
              </Box>
            ))}
          </Box>
        );
      })}
    </Box>
  );
};

export default Tasks;
