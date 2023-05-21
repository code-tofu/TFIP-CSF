import { Component, Input, Output} from '@angular/core';
import { Sport } from '../sport';
import { OutletContext } from '@angular/router';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-lister',
  templateUrl: './lister.component.html',
  styleUrls: ['./lister.component.css']
})
export class ListerComponent {

  @Input()
  selected:boolean = false;

  @Input()
  sport!: Sport;

  @Output()
  selectedSport: Subject<string> = new Subject();

  selectSport(e: any){
    // console.log(e);
    this.selectedSport.next(e)
  }

}
