//interfaces are Capitalcased
export interface Task {
  description: string;
  priority: number; //how do i limit the possible values?
  dueDate: string; //need a date format?
}

export interface Project {
  projectTitle: string;
  userName: string;
  tasks: Task[];
}
