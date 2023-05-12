import { Component, inject } from '@angular/core';
//Capital for class, lowercase for method
import { Observable, lastValueFrom } from 'rxjs';
import { JokeService } from './joke.service';
import { ApiResp } from './api-resp';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  //injectJokeService
  jokeSvc = inject(JokeService);

  setup$!: Observable<String>;
  punch$!: Observable<String>;
  setup!: string;
  punch!: string;
  joke$!: Observable<ApiResp>;

  //   getPunch() {
  //     this.punch$ = this.jokeSvc.getPunchObs();
  //   }
  //   getSetup() {
  //     this.setup$ = this.jokeSvc.getSetupObs();
  //   }

  getJoke() {
    this.joke$ = this.jokeSvc.getJokeObs(); //there is already one aysnc on the html
    lastValueFrom(this.joke$).then((joke) => (this.setup = joke.setup)); //apparnely this calls the obs again?
    console.info(this.setup); //will be undefined first because of all through.
  }
}
