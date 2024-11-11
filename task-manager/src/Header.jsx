import React from "react";
import { Button, Stack, Box } from "@mui/material";

const buttonLabels = ["Home", "Tasks", "Pomodoro", "Dashboard"];

const Header = () => (

    <header>
        <Box
            sx={{
                outline: 1,
                height: '125px',
                display: 'flex',
                justifyContent: 'space-between',
                paddingLeft: '650px',
            }}
            >
            
            <Stack 
            direction="row" spacing={8}
            sx={{
                maxHeight: '50px',
                padding: '50px',
            }}
            >
                {buttonLabels.map(label => (
                    <Button variant="text" sx={{color: "black"}}>{label}</Button>
                ))}
                
            </Stack>
            
            <Stack
            direction="row" spacing={8}
            sx={{
                maxHeight: '50px',
                padding: '50px',
            }}
            >
                <Button 
                variant="text" 
                sx={{
                    color: "black",  
                }}
                >
                    Sign in
                </Button>
            </Stack>
        </Box>
    </header>
)

export default Header