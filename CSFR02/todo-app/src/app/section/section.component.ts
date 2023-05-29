import { Component, Input } from '@angular/core';
import { Task } from '../model/task.model';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent {


  addNewTask() {
    this.taskList.push(null);
  }

  @Input()
  name:string = "new test section";
  
  taskList: (Task | null)[]=[];

  updateTaskList(e: Task|null, i:number) {
    console.log(e);
    this.taskList[i] = e;
  }

}
