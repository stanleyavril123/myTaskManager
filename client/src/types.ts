export interface Task {
  title: string;
  description: string;
  dueDate: string;
  priority: string;
  pomodoro: number;
  status: string;
}

export interface SidebarContextType {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}
