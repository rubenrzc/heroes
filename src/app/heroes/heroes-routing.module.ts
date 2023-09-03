import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes-list/heroes.component';
import { HeroInfoComponent } from './hero-info/hero-info.component';
import { HeroEditComponent } from './hero-edit/hero-edit.component';

const routes: Routes = [
  {
    path:'',
    component: HeroesComponent
  },
  {
    path:'nuevo',
    component: HeroInfoComponent
  },
  {
    path: 'editar/:id',
    component: HeroEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }
