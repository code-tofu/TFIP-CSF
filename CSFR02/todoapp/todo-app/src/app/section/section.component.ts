import { Component, Input, OnInit, inject} from '@angular/core';
import { Task } from '../model/task.model';
import { Router } from '@angular/router';
import { Section } from '../model/section.model';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent{

  router!: Router;

  @Input()
  section!:Section;

  constructor(){
    this.router = inject(Router)
  }

  addNewTask() {
    let newTask:Task = {
      name: "",
      priority: 0,
      complete: false,
      dueDate: "",
      description: "",
      steps: [],
      categories: [],
      attachments: [],  
  }
    this.section.taskList.push(newTask);
    //IMPT: note that navigate has "/" compared to paths in routermodule config
    this.router.navigate(['/section',this.section.id],{queryParams: {taskid: this.section.taskList.length-1 }})

  }
  // id!:number
  // name!:string;
  // taskList: (Task | null)[]=[];

  updateTaskList(e: Task, i:number) {
    console.log(e);
    this.section.taskList[i] = e;
  }

}
