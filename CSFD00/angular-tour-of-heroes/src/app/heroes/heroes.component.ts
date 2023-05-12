import { Component } from '@angular/core';
import { Hero } from '../hero';
// import { HEROES } from '../mock-heroes'; //uppercase because const?
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent {
  // Windstorm implements Hero interface defined by hero.ts
  heroStarter: Hero = {
    id: 1,
    name: 'Windstorm',
  };

  //   constructor(private heroService: HeroService) {}

  constructor(
    private heroService: HeroService,
    private messageService: MessageService
  ) {}
  //   heroes = HEROES; //from original TS import, changed to service
  heroes: Hero[] = [];

  selectedHero?: Hero;

  ngOnInit(): void {
    this.getHeroes();
  }

  //   getHeroes(): void {
  //     this.heroes = this.heroService.getHeroes();
  //   }
  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }

  //   onSelect(hero: Hero): void {
  //     this.selectedHero = hero;
  //   }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }
}
