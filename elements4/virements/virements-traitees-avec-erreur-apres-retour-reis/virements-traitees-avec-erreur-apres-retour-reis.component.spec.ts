import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VirementsTraiteesAvecErreurApresRetourReisComponent } from './virements-traitees-avec-erreur-apres-retour-reis.component';

describe('VirementsTraiteesAvecErreurApresRetourReisComponent', () => {
  let component: VirementsTraiteesAvecErreurApresRetourReisComponent;
  let fixture: ComponentFixture<VirementsTraiteesAvecErreurApresRetourReisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VirementsTraiteesAvecErreurApresRetourReisComponent]
    });
    fixture = TestBed.createComponent(VirementsTraiteesAvecErreurApresRetourReisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
