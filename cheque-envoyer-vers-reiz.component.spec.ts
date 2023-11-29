import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChequeEnvoyerVersReizComponent } from './cheque-envoyer-vers-reiz.component';

describe('ChequeEnvoyerVersReizComponent', () => {
  let component: ChequeEnvoyerVersReizComponent;
  let fixture: ComponentFixture<ChequeEnvoyerVersReizComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChequeEnvoyerVersReizComponent]
    });
    fixture = TestBed.createComponent(ChequeEnvoyerVersReizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
