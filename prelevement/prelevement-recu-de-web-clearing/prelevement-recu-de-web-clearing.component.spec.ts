import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrelevementRecuDeWebClearingComponent } from './prelevement-recu-de-web-clearing.component';

describe('PrelevementRecuDeWebClearingComponent', () => {
  let component: PrelevementRecuDeWebClearingComponent;
  let fixture: ComponentFixture<PrelevementRecuDeWebClearingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrelevementRecuDeWebClearingComponent]
    });
    fixture = TestBed.createComponent(PrelevementRecuDeWebClearingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
