import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes'; //uppercase because const?


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {

  // Windstorm implements Hero interface defined by hero.ts
  heroStarter: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  heroes = HEROES;

  selectedHero?: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}
