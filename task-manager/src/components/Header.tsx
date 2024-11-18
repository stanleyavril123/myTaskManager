import React from "react";
import { Button, Stack, Box} from "@mui/material";
import { Link } from "react-router-dom";
import LoginIcon from '@mui/icons-material/Login';

const buttonLabels: string[] = ["Home", "Tasks", "Pomodoro", "Dashboard"];
const buttonPaths: string[] = ["/Home", "/Tasks", "/Pomodoro", "/Dashboard"];

const Header: React.FC = () => (

    <header>
        <Box
            sx={{
                height: '125px',
                display: 'flex',
                justifyContent: 'center',
            }}
            >
            
            <Stack 
            direction="row" spacing={55}
            sx={{
                maxHeight: '50px',
                padding: '10px',
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
        </Box>
    </header>
)

export default Header