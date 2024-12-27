import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  Divider,
  Typography,
} from "@mui/material";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import HomeIcon from "@mui/icons-material/Home";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import TimerIcon from "@mui/icons-material/Timer";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
// import "./SidebarButtons.css";

interface SidebarButtonsProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SidebarButtons: React.FC<SidebarButtonsProps> = ({
  isOpen,
  setIsOpen,
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [pendingRoute, setPendingRoute] = useState<string | null>(null);

  const sections = [
    {
      title: "MENU",
      buttons: [
        { text: "Home", path: "/Home", icon: HomeIcon },
        { text: "Tasks", path: "/Tasks", icon: TaskAltIcon },
        { text: "Pomodoro", path: "/Pomodoro", icon: TimerIcon },
        { text: "Dashboard", path: "/Dashboard", icon: DashboardOutlinedIcon },
      ],
    },
    {
      title: "SUPPORT",
      buttons: [
        { text: "Settings", path: "/Settings", icon: SettingsOutlinedIcon },
        { text: "Help", path: "/Help", icon: HelpOutlineOutlinedIcon },
      ],
    },
  ];

  const handleRoute = (route: string) => {
    if (isOpen) {
      setIsOpen(false);
      setPendingRoute(route);
    } else {
      navigate(route);
    }
  };

  const handleEndTransition = () => {
    if (!isOpen && pendingRoute) {
      navigate(pendingRoute);
      setPendingRoute(null);
    }
  };

  return (
    <Box
      sx={{
        width: isOpen ? 300 : 70,
        transition: "width 0.3s ease",
        overflow: "hidden",
      }}
      onTransitionEnd={handleEndTransition}
    >
      <ListItemButton
        disableTouchRipple
        disableRipple
        onClick={() => setIsOpen(!isOpen)}
        sx={[{ minHeight: 48, px: 3 }]}
      >
        <ListItemIcon>{React.createElement(MenuIcon)}</ListItemIcon>
      </ListItemButton>
      <Divider />

      {sections.map((section, sectionIndex) => (
        <React.Fragment key={sectionIndex}>
          <Typography className="button-title">{section.title}</Typography>
          <List>
            {section.buttons.map((button, buttonIndex) => {
              const isActive =
                location.pathname === button.path ||
                (location.pathname === "/" && button.path === "/Home");

              return (
                <ListItem key={buttonIndex} disablePadding>
                  <ListItemButton
                    disableTouchRipple
                    disableRipple
                    onClick={() => handleRoute(button.path)}
                    sx={[
                      {
                        marginLeft: isOpen ? "20px" : "5px",
                        marginRight: isOpen ? "20px" : "5px",
                        marginBottom: "5px",
                        transition:
                          "margin-left 0.3s ease, margin-right 0.3s ease",
                        borderRadius: "15px",
                        "&:hover": {
                          color: "white",
                          backgroundColor: isActive ? "#5fc2d5" : "#a0a0a0",
                          transition: "none",
                        },
                        minHeight: 48,
                        px: 2.3,
                        background: isActive ? "#abdbe3" : "white",
                      },
                    ]}
                  >
                    <ListItemIcon>
                      {React.createElement(button.icon)}
                    </ListItemIcon>
                    <ListItemText
                      primary={button.text}
                      sx={{
                        display: isOpen ? "block" : "none",
                        whiteSpace: "nowrap",
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
          <Divider />
        </React.Fragment>
      ))}
    </Box>
  );
};

export default SidebarButtons;
