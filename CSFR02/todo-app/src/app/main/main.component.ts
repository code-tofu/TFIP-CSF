import { Component } from '@angular/core';
import { SectionComponent } from '../section/section.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  project: SectionComponent[] = [];

}
