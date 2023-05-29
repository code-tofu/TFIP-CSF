import { Task } from "./task.model";

export interface Section{
    id:number;
    name:string;
    taskList: Task[];
}