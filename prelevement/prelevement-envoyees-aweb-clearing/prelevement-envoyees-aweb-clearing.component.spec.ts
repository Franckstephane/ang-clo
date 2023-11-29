import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrelevementEnvoyeesAWebClearingComponent } from './prelevement-envoyees-aweb-clearing.component';

describe('PrelevementEnvoyeesAWebClearingComponent', () => {
  let component: PrelevementEnvoyeesAWebClearingComponent;
  let fixture: ComponentFixture<PrelevementEnvoyeesAWebClearingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrelevementEnvoyeesAWebClearingComponent]
    });
    fixture = TestBed.createComponent(PrelevementEnvoyeesAWebClearingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
