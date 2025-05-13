import React, { useState, useEffect, useRef } from "react";
import { Box, Button, Typography, ButtonGroup } from "@mui/material";
import { useSidebar } from "../components/Sidebar/SidebarContext.tsx";

const Pomodoro: React.FC = () => {
  const { isOpen } = useSidebar();
  const [time, setTime] = useState<number>(2700);
  const [focusTime, setFocusTime] = useState<number>(2700);
  const [breakTime, setBreakTime] = useState<number>(900);
  const [onBreak, setOnBreak] = useState<true | false>(false);
  const [isPaused, setIsPaused] = useState<true | false>(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        setTime((prev) => {
          if (prev === 0) {
            clearInterval(timerRef.current!);
            if (onBreak) {
              setTime(focusTime);
              setOnBreak(false);
            } else {
              setTime(breakTime);
              setOnBreak(true);
            }
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => clearInterval(timerRef.current!);
  }, [isPaused, onBreak, breakTime, focusTime]);

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
        <Button
          onClick={() => {
            setTime(900);
            setFocusTime(900);
            setBreakTime(300);
            setIsPaused(true);
            setOnBreak(false);
          }}
        >
          15:5
        </Button>
        <Button
          onClick={() => {
            setTime(1800);
            setFocusTime(1800);
            setBreakTime(600);
            setIsPaused(true);
            setOnBreak(false);
          }}
        >
          30:10
        </Button>
        <Button
          onClick={() => {
            setTime(2700);
            setFocusTime(2700);
            setBreakTime(900);
            setIsPaused(true);
            setOnBreak(false);
          }}
        >
          45:15
        </Button>
      </ButtonGroup>
      <Typography variant="h4">
        {onBreak ? "break time : " : "Focus time :"}
      </Typography>
      <Typography variant="h4">
        {`${Math.floor(time / 60)}`.padStart(2, 0)}:{`${time % 60}`.padStart(2, 0)}
      </Typography>

      <Button onClick={() => setIsPaused(!isPaused)}>
        {isPaused ? "Start" : "Pause"}
      </Button>
    </Box>
  );
};

export default Pomodoro;
