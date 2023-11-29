import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChequeRecuDeReizComponent } from './cheque-recu-de-reiz.component';

describe('ChequeRecuDeReizComponent', () => {
  let component: ChequeRecuDeReizComponent;
  let fixture: ComponentFixture<ChequeRecuDeReizComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChequeRecuDeReizComponent]
    });
    fixture = TestBed.createComponent(ChequeRecuDeReizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
