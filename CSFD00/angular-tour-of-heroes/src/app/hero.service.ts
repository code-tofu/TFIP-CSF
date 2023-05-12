import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  //   constructor() {} no-field constructor

  constructor(private messageService: MessageService) {}

  getHeroesSync(): Hero[] {
    return HEROES;
  }

  getHeroesAsync(): Observable<Hero[]> {
    const heroes = of(HEROES);
    return heroes;
  }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }
}
