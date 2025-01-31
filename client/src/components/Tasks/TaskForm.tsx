import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Typography,
} from "@mui/material";
// TODO: Change it to a popup
const TaskForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState("low");
  const [pomodoro, setPomodoro] = useState<string | number>(2);
  const [status, setStatus] = useState("not started");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const task = {
      title,
      description,
      dueDate,
      priority,
      pomodoro,
      status,

    };
    console.log("Task being sent:", task);

    try {
      const response = await fetch("http://localhost:8080/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(task),
      });
      if (response.ok) {
        const message = await response.text();
        console.log(message);
        alert("Task sent successfully!");
      } else {
        console.error("Failed to send task");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const fieldStyles = {
    "& .MuiOutlinedInput-root": {
      "& fieldset": { borderColor: "#FFC107" },
      "&:hover fieldset": { borderColor: "#FFD54F" },
    },
    input: { color: "#FFFFFF" },
    label: { color: "#FFFFFF" },
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        maxWidth: 400,
        margin: "0 auto",
        padding: 3,
        backgroundColor: "#212121",
        borderRadius: 2,
        boxShadow: 4,
      }}
    >
      <Typography variant="h5" textAlign="center" sx={{ color: "#FFC107" }}>
        New Task
      </Typography>
      <TextField
        label="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        fullWidth
        sx={fieldStyles}
      />
      <TextField
        label="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
        multiline
        rows={4}
        fullWidth
        sx={fieldStyles}
      />
      <TextField
        label="Due Date"
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        required
        fullWidth
        InputLabelProps={{ shrink: true }}
        sx={fieldStyles}
      />
      <FormControl fullWidth>
        <InputLabel sx={{ color: "#FFFFFF" }}>Priority</InputLabel>
        <Select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          sx={{ color: "#FFFFFF", ...fieldStyles }}
        >
          <MenuItem value="low">Low</MenuItem>
          <MenuItem value="medium">Medium</MenuItem>
          <MenuItem value="high">High</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel sx={{ color: "#FFFFFF" }}>Pomodoro</InputLabel>
        <Select
          value={pomodoro}
          onChange={(e) => setPomodoro(Number(e.target.value))}
          sx={{ color: "#FFFFFF", ...fieldStyles }}
        >
          <MenuItem value={1}>One Pomo</MenuItem>
          <MenuItem value={2}>Two Pomo</MenuItem>
          <MenuItem value={3}>Three Pomo</MenuItem>
          <MenuItem value={4}>Four Pomo</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel sx={{ color: "#FFFFFF" }}>Status</InputLabel>
        <Select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          sx={{ color: "#FFFFFF", ...fieldStyles }}
        >
          <MenuItem value="not started">Not Started</MenuItem>
          <MenuItem value="in progress">In Progress</MenuItem>
          <MenuItem value="completed">Completed</MenuItem>
        </Select>
      </FormControl>
      <Button
        variant="contained"
        type="submit"
        fullWidth
        sx={{
          backgroundColor: "#FFC107",
          color: "#212121",
          "&:hover": { backgroundColor: "#FFD54F" },
        }}
      >
        Add Task
      </Button>
    </Box>
  );
};
export default TaskForm;
