import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  // is this an attribute bracket or an array bracket?
  styles: [`
  h1{color:red}
  `]
})
export class AppComponent {
  title = 'Introduction to Angular';
}
