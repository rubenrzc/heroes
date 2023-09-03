import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';

import { Hero } from '../models/hero-interface';
import { HeroDTO } from '../models/hero';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  private heroesUrl = 'api/heroes';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  /**
   * Funcion que nos devuelve lista de Heroes entera
   * @returns Observable de una lista de Heroes
   */
  getHeroes() {
    return this.http.get<Hero[]>(this.heroesUrl);
  }

  /**
   * Funcion que nos devuelve un unico heroe por su id
   * @param id identificador de heroe
   * @returns Observable de Heroe
   */
  getHero(id: number) {
    return this.http.get<Hero>(`${this.heroesUrl}/${id}`);
  }

  /**
   * Funcion que nos devuelve una lista de heroes dependiendo del parametro que le pasemos
   * @param param string a matchear en la lista de heroes
   * @returns Observable de Heroes
   */
  getHeroWithParam(param: string) {
    return this.http.get<Hero[]>(this.heroesUrl);
  }

  /**
   * Funcion que modifica la info de un heroe
   * @param hero objeto Hero a modificar
   * @returns Observable de Hero
   */
  modifyHero(hero: Hero) {
    return this.http.put<Hero>(`${this.heroesUrl}/`, hero, this.httpOptions);
  }

  /**
   * Funcion que elimina un heroe por su id
   * @param id identificador del heroe
   * @returns Observable de Heroe
   */
  deleteHero(id: number) {
    return this.http.delete<Hero>(`${this.heroesUrl}/${id}`);
  }

  /**
   * Este no se haya en la especificacion del documento pero si se percibe que es necesario
   * Metodo para añadir un Heroe
   * @param hero
   * @returns
   */
  addHero(hero: HeroDTO) {
    return this.http.post<Hero>(this.heroesUrl, hero, this.httpOptions);
  }

  handleError(res: HttpErrorResponse | any) {
    console.error(res.error || res.body.error);
    return throwError(res.error || 'Server error');
  }
}
