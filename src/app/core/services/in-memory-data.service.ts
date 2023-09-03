import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from '../models/hero-interface';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService {
  createDb() {
    const heroes = [
      { id: 1, name: 'Superman' },
      { id: 2, name: 'Spiderman' },
      { id: 3, name: 'Manolo el del bombo' },
      { id: 4, name: 'Thor' },
      { id: 5, name: 'Superwoman' },
      { id: 6, name: 'Wonderwoman' },
      { id: 7, name: 'Lobezno' },
      { id: 8, name: 'Batman' },
      { id: 9, name: 'Flash' },
      { id: 10, name: 'Blade' },
      { id: 11, name: 'Cyclope' },
      { id: 12, name: 'Jubilee' },
      { id: 13, name: 'Jean Grey' },
      { id: 14, name: 'Nightcrawler' },
      { id: 15, name: 'V' },
      { id: 16, name: 'Xabier' },
      { id: 17, name: 'Green Lantern' },
      { id: 18, name: 'Green Arrow' },
      { id: 19, name: 'Bestia' },
      { id: 20, name: 'Deadpool' },
      { id: 21, name: 'Dr. Strange' },
    ];
    return { heroes };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0
      ? Math.max(...heroes.map((hero) => hero.id)) + 1
      : 11;
  }
}
