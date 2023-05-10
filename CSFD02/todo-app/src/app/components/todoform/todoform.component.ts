import { Component, OnInit, inject, Input, Output } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Task, Project } from '../../models';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-todoform',
  templateUrl: './todoform.component.html',
  styleUrls: ['./todoform.component.css'],
})
export class TodoformComponent implements OnInit {
  projectForm!: FormGroup;
  taskArray!: FormArray; //array is in the component for easy access

  fb: FormBuilder = inject(FormBuilder);
  ngOnInit(): void {
    this.projectForm = this.fbCreateForm();
  }

  fbCreateForm() {
    this.taskArray = this.fb.array([]);
    return this.fb.group({
      projectTitle: this.fb.control<string>(''),
      userName: this.fb.control<string>(''),
      tasks: this.taskArray, //need to match formArrayName
    });
  }

  fbCreateTask() {
    return this.fb.group({
      description: this.fb.control<string>(''),
      priority: this.fb.control<number>(1),
      dueDate: this.fb.control<string>(''),
    });
  }

  addTask() {
    this.taskArray.push(this.fbCreateTask());
  }

  delTask(i: number) {
    this.taskArray.removeAt(i);
  }

  @Output()
  obsProject = new Subject<Project>();

  submitProject() {
    const newProject: Project = this.projectForm.value;
    console.info('<todoformComponent> says:', newProject);
    this.obsProject.next(newProject);
    this.projectForm.reset(); // TODO: forms array is cleared but it is still same size?
  }

  @Input()
  projectToEdit?: Project;
  fbEdit1() {
    // return this.fb.group({
    //   projectTitle: this.projectToEdit?.projectTitle,
    //   userName: this.projectToEdit?.userName,
    //   tasks: this.projectToEdit?.tasks,
    // });
  }
  fbEdit2(editingProject: any) {
    console.info('editing');
    //should i cast?
    // return this.fb.group({
    //   projectTitle: editingProject.projectTitle,
    //   userName: editingProject.userName,
    //   tasks: editingProject.tasks,
    // });
    this.projectForm = editingProject;
  }
  showEdit() {
    console.info(this.projectToEdit);
  }
  clearEdit() {
    this.projectToEdit = undefined;
  }
}
