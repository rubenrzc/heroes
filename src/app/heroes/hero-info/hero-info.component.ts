import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HeroDTO } from 'src/app/core/models/hero';
import { Hero } from 'src/app/core/models/hero-interface';
import { HeroesService } from 'src/app/core/services/heroes.service';

@Component({
  selector: 'app-hero-info',
  templateUrl: './hero-info.component.html',
  styleUrls: ['./hero-info.component.css'],
})
export class HeroInfoComponent {
  heroFormGroup = new FormGroup({
    name: new FormControl('', [
      Validators.pattern('[a-zA-ZñÑáéíóúÁÉÍÓÚ ]*'),
      Validators.maxLength(30),
      Validators.required,
    ]),
  });

  constructor(private heroService: HeroesService, private router: Router) {}

  /**
   * Funcion para crear un heroe
   */
  createHero() {
    const hero = new HeroDTO(null, this.heroFormGroup.value.name! )
    this.heroService.addHero(hero).subscribe({
      next: (data) => {
        this.router.navigate(['/heroes'])
      },
    });
  }
}
