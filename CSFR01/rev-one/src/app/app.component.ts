import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  interpolatedTitle: string = 'rev-one';
  appcomptwo: string = "this header is defined in app-component object";
}
