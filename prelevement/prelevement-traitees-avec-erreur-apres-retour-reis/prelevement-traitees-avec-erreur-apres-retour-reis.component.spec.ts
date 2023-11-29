import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrelevementTraiteesAvecErreurApresRetourReisComponent } from './prelevement-traitees-avec-erreur-apres-retour-reis.component';

describe('PrelevementTraiteesAvecErreurApresRetourReisComponent', () => {
  let component: PrelevementTraiteesAvecErreurApresRetourReisComponent;
  let fixture: ComponentFixture<PrelevementTraiteesAvecErreurApresRetourReisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrelevementTraiteesAvecErreurApresRetourReisComponent]
    });
    fixture = TestBed.createComponent(PrelevementTraiteesAvecErreurApresRetourReisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
