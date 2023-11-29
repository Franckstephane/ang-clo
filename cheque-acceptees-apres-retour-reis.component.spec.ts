import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChequeAccepteesApresRetourREISComponent } from './cheque-acceptees-apres-retour-reis.component';

describe('ChequeAccepteesApresRetourREISComponent', () => {
  let component: ChequeAccepteesApresRetourREISComponent;
  let fixture: ComponentFixture<ChequeAccepteesApresRetourREISComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChequeAccepteesApresRetourREISComponent]
    });
    fixture = TestBed.createComponent(ChequeAccepteesApresRetourREISComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
