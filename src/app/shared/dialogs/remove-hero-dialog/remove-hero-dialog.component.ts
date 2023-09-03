import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Hero } from 'src/app/core/models/hero-interface';

@Component({
  selector: 'app-remove-hero-dialog',
  templateUrl: './remove-hero-dialog.component.html',
  styleUrls: ['./remove-hero-dialog.component.css'],
})
export class RemoveHeroDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: Hero) {}
}
