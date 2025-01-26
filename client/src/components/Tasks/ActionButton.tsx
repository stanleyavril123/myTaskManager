import React from "react";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

interface ActionButtonProps {
  onClick: () => void;
}
const ActionButton: React.FC<ActionButtonProps> = ({ onClick }) => {
  return (
    <Box>
      <Fab
        onClick={onClick}
        sx={{
          backgroundColor: "#FCC810",
        }}
        aria-label="add"
      >
        <AddIcon />
      </Fab>
    </Box>
  );
};
export default ActionButton;
