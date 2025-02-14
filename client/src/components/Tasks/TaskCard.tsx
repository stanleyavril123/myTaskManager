import React from "react";
import { Task } from "../../types";
import {
  Box,
  Typography,
  Chip,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Divider,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface TaskProps {
  task: Task;
  isFirst: boolean;
  isLast: boolean;
}

const TaskCard: React.FC<TaskProps> = ({ task, isFirst, isLast }) => {
  return (
    <Accordion
      PaperProps={{
        sx: {
          borderRadius: isFirst ? "8px 8px 0 0" : isLast ? "0 0 8px 8px" : 0,
        },
      }}
      sx={{
        width: "100vw",
        backgroundColor: "#1e1e1e",
        color: "#ffffff",
        boxShadow: "none",
        marginBottom: "5px",

        "&:before": {
          display: "none",
        },

        "&:not(:first-of-type)": {
          borderTop: "1px solid rgba(255,255,255,0.2)",
        },
      }}
      disableGutters
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon sx={{ color: "#FCC810" }} />}
        sx={{
          typography: "h6",
          fontWeight: "bold",
          padding: "16px",
        }}
      >
        {task.title}
      </AccordionSummary>

      <AccordionDetails sx={{ padding: "16px" }}>
        <Typography variant="body2" sx={{ opacity: 0.8, marginBottom: "12px" }}>
          {task.description}
        </Typography>

        <Divider
          sx={{
            borderColor: "rgba(255, 255, 255, 0.2)",
            marginBottom: "12px",
          }}
        />

        <Typography variant="body2" sx={{ marginBottom: "8px" }}>
          <span style={{ color: "#FCC810", fontWeight: "bold" }}>📅 Due:</span>{" "}
          {task.dueDate}
        </Typography>

        <Box sx={{ display: "flex", gap: 1 }}>
          <Chip
            label={task.priority}
            sx={{
              backgroundColor: getPriorityColor(task.priority),
              color: "#000",
              fontWeight: "bold",
              textTransform: "uppercase",
            }}
          />

          <Chip
            label={task.status}
            sx={{
              backgroundColor: getStatusColor(task.status),
              color: "#fff",
              fontWeight: "bold",
              textTransform: "uppercase",
            }}
          />
        </Box>
      </AccordionDetails>
    </Accordion>
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
