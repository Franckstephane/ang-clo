import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VirementsEnvoyeesAWebClearingComponent } from './virements-envoyees-aweb-clearing.component';

describe('VirementsEnvoyeesAWebClearingComponent', () => {
  let component: VirementsEnvoyeesAWebClearingComponent;
  let fixture: ComponentFixture<VirementsEnvoyeesAWebClearingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VirementsEnvoyeesAWebClearingComponent]
    });
    fixture = TestBed.createComponent(VirementsEnvoyeesAWebClearingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
