import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChequeRecuWebClearingComponent } from './cheque-recu-web-clearing.component';

describe('ChequeRecuWebClearingComponent', () => {
  let component: ChequeRecuWebClearingComponent;
  let fixture: ComponentFixture<ChequeRecuWebClearingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChequeRecuWebClearingComponent]
    });
    fixture = TestBed.createComponent(ChequeRecuWebClearingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
