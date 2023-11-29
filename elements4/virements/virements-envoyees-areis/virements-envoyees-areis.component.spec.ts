import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VirementsEnvoyeesAReisComponent } from './virements-envoyees-areis.component';

describe('VirementsEnvoyeesAReisComponent', () => {
  let component: VirementsEnvoyeesAReisComponent;
  let fixture: ComponentFixture<VirementsEnvoyeesAReisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VirementsEnvoyeesAReisComponent]
    });
    fixture = TestBed.createComponent(VirementsEnvoyeesAReisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
