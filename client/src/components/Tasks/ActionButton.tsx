import React from "react";
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

const ActionButton: React.FC = () => {
  return (
    <Box>
      <Fab sx={{
        backgroundColor: "#FCC810",
      }}
        aria-label="add">
        <AddIcon />
      </Fab>
    </Box>

  );
}
export default ActionButton;
