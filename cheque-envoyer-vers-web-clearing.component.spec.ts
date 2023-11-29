import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChequeEnvoyerVersWebClearingComponent } from './cheque-envoyer-vers-web-clearing.component';

describe('ChequeEnvoyerVersWebClearingComponent', () => {
  let component: ChequeEnvoyerVersWebClearingComponent;
  let fixture: ComponentFixture<ChequeEnvoyerVersWebClearingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChequeEnvoyerVersWebClearingComponent]
    });
    fixture = TestBed.createComponent(ChequeEnvoyerVersWebClearingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
