import { Component, OnDestroy, ViewChild, OnInit } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Hero } from 'src/app/core/models/hero-interface';
import { HeroesService } from 'src/app/core/services/heroes.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { RemoveHeroDialogComponent } from 'src/app/shared/dialogs/remove-hero-dialog/remove-hero-dialog.component';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit, OnDestroy {
  private subscription = new Subscription();

  displayedColumns: string[] = ['id', 'name', 'menu'];
  dataSource!: MatTableDataSource<Hero>;

  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort!: MatSort;

  constructor(
    private heroService: HeroesService,
    private router: Router,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.subscription.add(
      this.heroService.getHeroes().subscribe({
        next: (data) => {
          this.dataSource = new MatTableDataSource(data);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        },
        error: (err) => {
          console.log(err);
        },
      })
    );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  selectHero(hero: Hero) {
    this.router.navigate([`/heroes/editar/${hero.id}`]);
  }

  removeHero(hero: Hero) {
    const dialogRef = this.dialog.open(RemoveHeroDialogComponent, {
      data: hero,
    });

    dialogRef.afterClosed().subscribe({
      next: (res) => {
        if (res) {
          this.heroService.deleteHero(hero.id).subscribe({
            next: () => {
              this.ngOnInit();
            },
            error: (err) => {
              console.log(err);
            },
          });
        }
      },
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
