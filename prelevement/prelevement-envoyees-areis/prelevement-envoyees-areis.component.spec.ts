import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrelevementEnvoyeesAReisComponent } from './prelevement-envoyees-areis.component';

describe('PrelevementEnvoyeesAReisComponent', () => {
  let component: PrelevementEnvoyeesAReisComponent;
  let fixture: ComponentFixture<PrelevementEnvoyeesAReisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrelevementEnvoyeesAReisComponent]
    });
    fixture = TestBed.createComponent(PrelevementEnvoyeesAReisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
