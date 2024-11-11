import React from "react";
import Box from '@mui/material/Box';
import { Button, Stack } from "@mui/material";


const Header = () => (
    <header>
        <Box
            sx={{
                outline: 1,
                height: '100px',
                display: 'flex',
                justifyContent: 'center',
            }}
            >
            
            <Stack 
            direction="row" spacing={15}
            sx={{
                maxHeight: '50px',
                padding: '24px',
            }}
            
            >
                <Button variant="text">Home</Button>
                <Button variant="text">Tasks</Button>
                <Button variant="text">Pomodoro</Button>
                <Button variant="text">Dashboard</Button>
            </Stack>

        </Box>
    </header>
)

export default Header