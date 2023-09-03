import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveHeroDialogComponent } from './remove-hero-dialog.component';

describe('RemoveHeroDialogComponent', () => {
  let component: RemoveHeroDialogComponent;
  let fixture: ComponentFixture<RemoveHeroDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RemoveHeroDialogComponent]
    });
    fixture = TestBed.createComponent(RemoveHeroDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
