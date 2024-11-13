import React, { useState } from "react";
import { Box, List, ListItem, ListItemButton,ListItemText, Button, Drawer } from "@mui/material";
import Header from "./Header.tsx";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


export default function SideBars() {

    const [open, setOpen] = useState<boolean>(false);

    const SideBarList: React.FC = () => (
        <Box sx={{ width: 250 }} role="presentation" onClick={() => setOpen(false)}>
            <List>
                {['roadmap', 'calender', 'setting'].map((text) => (
                <ListItem key={text} disablePadding>
                    <ListItemButton>
                    <ListItemText primary={text} />
                    </ListItemButton>
                </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <Box sx={{ display: 'flex' }}>
            <Drawer
                open={open}
                onClose={() => setOpen(false)}
                variant="persistent"
                anchor="left"
            >
                <SideBarList/>
            </Drawer>

            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    paddingLeft: open ? '250px' : '0',
                    transition: 'padding-left 0.3s ease',
                }}
            >
                <Header />
                <Button onClick={() => setOpen(!open)} sx={{ margin: '20px' }}>
                    <ArrowForwardIosIcon sx={{color: "black"}}/>
                </Button>
            </Box>
        </Box>
    );
}