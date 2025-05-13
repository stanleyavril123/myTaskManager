import React, { useState, useEffect } from "react";
import { Box, Button, Typography, ButtonGroup } from "@mui/material";
import { useSidebar } from "../components/Sidebar/SidebarContext.tsx";

const Pomodoro: React.FC = () => {
  const { isOpen } = useSidebar();
  const [time, setTime] = useState(2700);
  const [isPaused, setIsPaused] = useState(true);
  useEffect(() => {
    if (!isPaused) {
      let timer = setInterval(() => {
        setTime((time) => {
          if (time === 0) {
            clearInterval(timer);
            return 0;
          } else return time - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [isPaused]);

  return (
    <Box
      sx={{
        marginLeft: isOpen ? "300px" : "80px",
        transition: "margin-left 0.2s ease-in-out",
        position: "relative",
        p: 2,
      }}
    >
      <ButtonGroup variant="contained" aria-label="Basic button group">
        <Button onClick={() => {setTime(900); setIsPaused(true)}}>15:5</Button>
        <Button onClick={() => {setTime(1800); setIsPaused(true)}}>30:10</Button>
        <Button onClick={() => {setTime(2700); setIsPaused(true)}}>45:15</Button>
      </ButtonGroup>

      <Typography variant="h4">
        Time left: {`${Math.floor(time / 60)}`.padStart(2, 0)}:
        {`${time % 60}`.padStart(2, 0)}
      </Typography>

      <Button onClick={() => setIsPaused(!isPaused)}>
        {isPaused ? "Start" : "Pause"}
      </Button>
    </Box>
  );
};

export default Pomodoro;
