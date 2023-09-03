import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Hero } from 'src/app/core/models/hero-interface';
import { HeroesService } from 'src/app/core/services/heroes.service';

@Component({
  selector: 'app-hero-edit',
  templateUrl: './hero-edit.component.html',
  styleUrls: ['./hero-edit.component.css'],
})
export class HeroEditComponent implements OnInit {
  hero?: Hero;

  heroFormGroup = new FormGroup({
    name: new FormControl('', [
      Validators.pattern('[a-zA-ZñÑáéíóúÁÉÍÓÚ ]*'),
      Validators.maxLength(30),
      Validators.required,
    ]),
  });

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroesService,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.heroService.getHero(params['id']).subscribe({
        next: (data) => {
          this.hero = data;
        },
      });
    });
  }

  /**
   * Funcion que actualiza los datos de un heroe
   */
  updateHero() {
    if (this.hero) {
      this.hero.name = this.heroFormGroup.value.name!;
      this.heroService.modifyHero(this.hero).subscribe({
        next: () => {
          this.router.navigate(['/heroes']);
        },
      });
    }
  }
}
