import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChequeTraiteesAvecErreurApresRetourREISComponent } from './cheque-traitees-avec-erreur-apres-retour-reis.component';

describe('ChequeTraiteesAvecErreurApresRetourREISComponent', () => {
  let component: ChequeTraiteesAvecErreurApresRetourREISComponent;
  let fixture: ComponentFixture<ChequeTraiteesAvecErreurApresRetourREISComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChequeTraiteesAvecErreurApresRetourREISComponent]
    });
    fixture = TestBed.createComponent(ChequeTraiteesAvecErreurApresRetourREISComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
