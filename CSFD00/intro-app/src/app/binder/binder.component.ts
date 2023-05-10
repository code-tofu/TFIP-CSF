import { Component } from '@angular/core';

@Component({
  selector: 'app-binder',
  templateUrl: './binder.component.html',
  styleUrls: ['./binder.component.css']
})
export class BinderComponent {

  //is this a let or var declaration?
  interString = 'sumString Wrong'
  interNumber = 69420;
  isAfter3 = false;
  split = 15;
  userString = "";

  isBeforeThree():string {
    const d = new Date();
    console.log(d);
    console.log("before 3 method called");
    let hour = d.getHours();

    if (hour >= this.split){
      this.isAfter3 = true;
      return `after ${this.split - 12}pm`;
    } else {
      return `before ${this.split - 12}pm`;
    }
  }

  onButton_hello(){
    console.log("hello console!");
  }

  //event is a special parameter of type any
  onFormInput(event:any){
    console.log(event.target.value);
  }


  fontColor = 'blue';
  sayHelloId = 1;
  canClick = false;
  message = 'Hello, World';
 
  sayMessage() {
    alert(this.message);
  }

}
