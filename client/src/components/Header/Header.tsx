import React from "react";
import { Box } from "@mui/material";
import { useSidebar } from "../Sidebar/SidebarContext.tsx";

const Header: React.FC = () => {
  const { isOpen } = useSidebar();
  return (
    <Box
      sx={{
        marginLeft: isOpen ? "310px" : "90px",
        transition: "margin-left 0.2s ease-in-out",
      }}
    >
      <h1>Hello iam a header</h1>
    </Box>
  );
};
export default Header;
