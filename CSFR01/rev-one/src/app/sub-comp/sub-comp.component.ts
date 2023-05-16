import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sub-comp',
  templateUrl: './sub-comp.component.html',
  styleUrls: ['./sub-comp.component.css']
})
export class SubCompComponent {


  isDisabled: boolean = false;
  disableToggle() {
    this.isDisabled ? this.isDisabled=false : this.isDisabled=true;
  }

  buttonText: string = "Self Disabling Button";
  changeText(e : any){
    console.info(e.target.value)
    this.buttonText = "HAHA!"
  }

  @Input()
  subcompone:string = "";
  @Input()
  subcomptwo:string = "";


}
