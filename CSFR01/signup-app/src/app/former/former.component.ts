import { Component, OnInit, inject } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, ValidationErrors, Validators,ValidatorFn } from '@angular/forms';

const validateJohn = (ctrl: AbstractControl) => {
  if (ctrl.value.trim().toLowerCase() === 'john')
   return { isJohn: true} as ValidationErrors;
   return null;
}

@Component({
  selector: 'app-former',
  templateUrl: './former.component.html',
  styleUrls: ['./former.component.css']
})
export class FormerComponent implements OnInit{

  fb:FormBuilder = inject(FormBuilder)

  mainform!: FormGroup
  namesform!: FormArray
  submittedStatus: boolean = false;
  
  ngOnInit(){
    this.newForm();
  }

  newForm() {
    this.mainform = this.createForm();
    this.submittedStatus = false;
  }

  createForm(){
    this.namesform = this.fb.array([])
    return this.fb.group({
      signups: this.namesform,
    });
  }
  createSignup(){
    return this.fb.group({
      name: this.fb.control<string>('',[Validators.required, Validators.minLength(3), Validators.maxLength(50),validateJohn]),
      age: this.fb.control<number>(18,[Validators.required, Validators.min(18), Validators.max(35)]),
      gender: this.fb.control<string>('M',[Validators.required])
    })
  }

  addName(){
    this.namesform.push(this.createSignup());
    console.log("formsize:",this.namesform.length)
  }
  deleteName(i: number){
    this.namesform.removeAt(i);
    console.log("formsize:",this.namesform.length)
  }

  submit(){
    this.submittedStatus = true;
    console.info(this.mainform.value);
    this.namesform = this.fb.array([])
    this.mainform.reset();
  }

  checkLength(){
    return !(this.namesform.length >0)
  }


    
}
