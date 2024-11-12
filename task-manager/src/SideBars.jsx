import React, { useState } from "react";
import { Box, List, ListItem, ListItemButton,ListItemText, Button, Drawer } from "@mui/material";
import Header from "./Header";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


export default function SideBars() {

    const [open, setOpen] = useState(false);
    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    }

    const SideBarList = () => (
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
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
                onClose={toggleDrawer(false)}
                variant="persistent"
                anchor="left"
            >
                {SideBarList()}
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
                <Button onClick={toggleDrawer(true)} sx={{ margin: '20px' }}>
                    <ArrowForwardIosIcon sx={{color: "black"}}/>
                </Button>
            </Box>
        </Box>
    );
}