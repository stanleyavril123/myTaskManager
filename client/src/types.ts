export interface Task {
  title: string;
  description: string;
  dueDate: string;
  priority: string;
  status: string;
}

export interface SidebarContextType {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}
