import { Component, Input, Output } from '@angular/core';
import { Task, Project } from '../../models';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css'],
})
export class TodolistComponent {
  @Input()
  projectList: Project[] = [];

  @Output()
  obsDelete = new Subject<number>();
  delProject(i: number) {
    console.info(' <todolistComponent> says: Delete:', i);
    this.obsDelete.next(i);
  }

  @Output()
  obsEdit = new Subject<number>();

  editProject(i: number) {
    console.info('<todolistComponent> says: Edit:', i);
    this.obsEdit.next(i);
  }
}
