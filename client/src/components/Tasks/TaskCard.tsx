import React from "react";
import { Task } from "../../types";
import { Box, Card, CardContent, Typography, Chip } from "@mui/material";

interface TaskProps {
  task: Task;
}

const TaskCard: React.FC<TaskProps> = ({ task }) => {
  return (
    <Card
      sx={{
        width: 320,
        backgroundColor: "#1e1e1e",
        color: "#ffffff",
        borderRadius: 2,
        boxShadow: 3,
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardContent>
        <Typography variant="h4" sx={{mb: 1 }}>
          {task.title}
        </Typography>

        <Typography variant="body2" sx={{ mb: 2, opacity: 0.8 }}>
          {task.description}
        </Typography>

        <Typography variant="body2" sx={{ mb: 1 }}>
          📅 Due: <strong>{task.dueDate}</strong>
        </Typography>

        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 1 }}>
          <Chip
            label={task.priority}
            sx={{
              backgroundColor: getPriorityColor(task.priority),
              color: "#000",
              fontWeight: "bold",
            }}
          />

          <Chip
            label={task.status}
            sx={{
              backgroundColor: getStatusColor(task.status),
              color: "#fff",
              fontWeight: "bold",
            }}
          />
        </Box>
      </CardContent>
    </Card>
  );
};

const getPriorityColor = (priority: string) => {
  switch (priority.toLowerCase()) {
    case "high":
      return "#ff3d00"; // Red
    case "medium":
      return "#ffb300"; // Orange
    case "low":
      return "#4caf50"; // Green
    default:
      return "#757575"; // Gray
  }
};

const getStatusColor = (status: string) => {
  switch (status.toLowerCase()) {
    case "not started":
      return "#616161"; // Dark gray
    case "in progress":
      return "#1976d2"; // Blue
    case "completed":
      return "#388e3c"; // Green
    default:
      return "#424242"; // Default gray
  }
};

export default TaskCard;
