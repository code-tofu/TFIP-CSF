import { Component } from '@angular/core';
import { SectionComponent } from '../section/section.component';
import { Section } from '../model/section.model';
import { TaskdataService } from '../taskdata.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  project!: Section[]
  addname: string = "";

  constructor(private taskSvc: TaskdataService){
    this.project = this.taskSvc.project;
    //evalutes to true, understanding svc injection
    console.log(Object.is(this.project,this.taskSvc.project))
  }

  addNewSection(){
    //creating a new object of interface Section (as opposed to a object from a class)
    let newSection: Section = {
      id:this.project.length,
      name:this.addname,
      taskList: [],
    }
    this.project.push(newSection);
    this.addname = "";
    console.info(">>project.length:",this.project.length)
  }
}
