import React from "react";
import { Drawer } from "@mui/material";
import SidebarButtons from "./SidebarButtons.tsx";
import { useSidebar } from "./SidebarContext.tsx";

const Sidebar: React.FC = () => {
  const { isOpen, setIsOpen } = useSidebar();
  return (
    <>
      <Drawer
        open={isOpen}
        onClose={() => setIsOpen(false)}
        variant="permanent"
      >
        <SidebarButtons />
      </Drawer>
    </>
  );
};

export default Sidebar;
