import React from "react";
import { Button, Stack, Box} from "@mui/material";
import { Link } from "react-router-dom";

const buttonLabels: string[] = ["Home", "Tasks", "Pomodoro", "Dashboard"];
const buttonPaths: string[] = ["/Home", "/Tasks", "/Pomodoro", "/Dashboard"];

const Header: React.FC = () => (

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
                {buttonLabels.map((label, index)=> (
                    <Link to={buttonPaths[index]} key={index} style={{ textDecoration: 'none' }}>
                        <Button key={index} variant="text" sx={{color: "black"}}>
                            {label}
                        </Button>
                    </Link>
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