import React from "react";
import { Drawer } from "@mui/material";
import { useState } from "react";
import SidebarButtons from "./SidebarButtons.tsx";

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<true | false>(false);
  return (
    <>
      <Drawer
        open={isOpen}
        onClose={() => setIsOpen(false)}
        variant="permanent"
      >
        <SidebarButtons isOpen={isOpen} setIsOpen={setIsOpen} />
      </Drawer>
    </>
  );
};

export default Sidebar;
