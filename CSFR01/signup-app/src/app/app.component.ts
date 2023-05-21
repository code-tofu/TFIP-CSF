import { Component, ViewChild, inject } from '@angular/core';
import { SignupdbService } from './signupdb.service';
import { Sport } from './sport';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
    title = 'Sports Day Sign Up Sheet';

    signupService: SignupdbService = inject(SignupdbService);
    sportsData: Sport[] = this.signupService.sportData;



    selected!: String;
    selectSport(e: string) {
        this.selected = e;
        console.log('Selected:', this.selected);
    }

}
