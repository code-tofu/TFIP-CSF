import { Component, EventEmitter, Output } from '@angular/core';
import { Task, Project } from './models';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  projectList: Project[] = [];
  projectToEdit?: Project;

  addProject(e: any) {
    console.info('<appComponent> says: Adding', e);
    this.projectList.push(e);
    console.info(this.projectList);
  }

  delProject(i: any) {
    console.info('<appComponent> says: Delete:', i);
    this.projectList.splice(i, 1);
  }

  @Output()
  editingEvent = new Subject<Project>();
  editProject(i: any) {
    console.info('<appComponent> says: Edit:', i);
    this.projectToEdit = this.projectList[i];
    this.editingEvent.next(this.projectList[i]);
  }
}
