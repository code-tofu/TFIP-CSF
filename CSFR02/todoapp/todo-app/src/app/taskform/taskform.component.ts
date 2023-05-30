import { Component, ElementRef, Input, OnInit, Output, ViewChild, inject } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Task } from '../model/task.model';
import { MatChipEditedEvent, MatChipInputEvent } from '@angular/material/chips';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Subject } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { TaskdataService } from '../taskdata.service';

@Component({
  selector: 'app-taskform',
  templateUrl: './taskform.component.html',
  styleUrls: ['./taskform.component.css'],
})
export class TaskformComponent implements OnInit {

  //For Material Forms
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;

  //Form Members
  taskFmGrp!: FormGroup;
  stepsFmArr!: FormArray;
  categoriesFmArr!: FormArray;
  //for some strange reason attachmentFmArray cannot hold type file?
  attachmentsFmArr!: FormArray;
  attachmentsArr:File[] = [];

  // fb = inject(FormBuilder);
  constructor(private fb: FormBuilder, private activatedRoute:ActivatedRoute, private title:Title, private taskData: TaskdataService, private router:Router){}
  // @Output()
  // upsertTaskSub = new Subject<Task | null>()
  sectionId!:number
  taskId!:number
  // task!: Task;
  completed: boolean = false

  ngOnInit(): void {
    // const view = this.activatedRoute.snapshot.queryParams['view'].setTitle('')
    this.taskId = this.activatedRoute.snapshot.queryParams["taskid"]
    this.sectionId = this.activatedRoute.snapshot.params["id"]
    // this.task = this.taskData.project[this.sectionId].taskList[this.taskId]
    this.attachmentsArr = this.taskData.project[this.sectionId].taskList[this.taskId].attachments
    this.taskFmGrp = this.createTaskForm(this.taskData.project[this.sectionId].taskList[this.taskId])
  }

  //create a form group from each task in the parent task array or generate a new form group	
  createTaskForm(task: Task | null): FormGroup {
    //if no steps are added, array exists but is empty
    this.stepsFmArr = this.createStepsFmArr(!!task ? task.steps : []);
    this.categoriesFmArr = this.createCategoriesFmArr(
      !!task ? task.categories : []
    );
    this.attachmentsFmArr = this.createAttachmentsFmArr(
      !!task ? task.attachments : []
    );

    return this.fb.group({
      name: this.fb.control<string>(!!task ? task.name : '',Validators.required),
      priority: this.fb.control<number>(!!task ? task.priority : 1,Validators.required),
      complete: this.fb.control<boolean>(!!task ? task.complete : false),
      dueDate: this.fb.control<string>(!!task ? task.dueDate : '',Validators.required),
      description: this.fb.control<string>(!!task ? task.description : '',),
      steps: this.stepsFmArr,
      categories: this.categoriesFmArr,
      attachments: this.attachmentsFmArr,
    });
  }

  //  METHODS TO CREATE FORM ARRAYS FROM EXISTING TASKS
  createStepsFmArr(steps: string[]) {
    return this.fb.array(steps.map((step) => this.fb.control<string>(step)));
  }
  createCategoriesFmArr(categories: string[]) {
    return this.fb.array(categories.map((cat) => this.fb.control<string>(cat)));
  }
  createAttachmentsFmArr(attachments: File[]) {
    return this.fb.array(attachments.map((att) => this.fb.control<File>(att)));
  }

  addStepCtrl() {
    this.stepsFmArr.push(this.fb.control<string>(''));
    console.info('stepsFmArr.length:', this.stepsFmArr.length);
  }
  removeStep(i: number) {
    this.stepsFmArr.removeAt(i);
    console.info('stepsFmArr.length:', this.stepsFmArr.length);
  }

  addCategoryCtrl(event: MatChipInputEvent) {
    const cat = event.value.trim();
    if (cat) {
      this.categoriesFmArr.push(this.fb.control<string>(cat));
      event.chipInput!.clear();
      console.info('categoriesFmArr.length:', this.categoriesFmArr.length);
    }
  }
  removeCategory(i: number) {
    this.categoriesFmArr.removeAt(i);
    console.info('categoriesFmArr.length:', this.categoriesFmArr.length);
  }
  editCategory(i: number, event: MatChipEditedEvent) {
    const cat = event.value.trim();
    if (!cat) {
      this.removeCategory(i);
      console.info('categoriesFmArr.length:', this.categoriesFmArr.length);
      return;
    }
    this.categoriesFmArr.setControl(i, this.fb.control<string>(cat));
  }

  addAttachmentCtrl() {
    this.attachmentsFmArr.push(this.fb.control<File | null>(null));
  }
  removeFile(i: number) {
    this.attachmentsFmArr.removeAt(i);
  }

  saveTask() {
    //CREATE NEW TASK OBJECT
    const newTask = this.taskFmGrp.value as Task;
    newTask.attachments = this.attachmentsArr
    console.info(newTask);
    // //SAVE TASK TO SERVICE SECTION USING SUBJECT
    // this.upsertTaskSub.next(newTask);

    this.taskData.upsertTask(this.sectionId,this.taskId,newTask);
    //RESET FORM
    this.taskFmGrp = this.createTaskForm(null);
    this.attachmentsArr = [];

    this.router.navigate(["/"]);
    }
   

  addAttachment(e: File) {
    console.info(e.size);
    this.attachmentsArr.push(e);
    console.info("attachments.length",this.attachmentsArr.length);
    // console.info("attached file size:",this.attachmentsArr[this.attachmentsArr.length-1].size)
    }
    // IMPT: After resetting the form, the form arrays need to be re-initialised to be cleared
    
  completeTask() {
    //toggle for formgroup status
    this.completed ? this.taskFmGrp.patchValue({'complete':true}) : this.taskFmGrp.patchValue({'complete':false});
    //toggle for disabled
    this.completed ? this.taskFmGrp.disable() : this.taskFmGrp.enable()
    console.info(this.taskFmGrp.value)
  }



}

// Task{
//   name: string;
//   priority: number;
//   complete: boolean;
//   dueDate: string;
//   description: string;
//   steps: string[];
//   categories: string[];
//   attachments: File[];    
// }

// import { ThemePalette } from '@angular/material/core';
// color!: ThemePalette
// colorControl = new FormControl(this.priorityColor(3) as ThemePalette);
// priorityColor(i: number) {
// switch (i) {
//   case 2:
//     return 'accent';
//     break;
//   case 3:
//     return 'warn';
//     break;
//   default:
//     return 'primary';
//     break;
