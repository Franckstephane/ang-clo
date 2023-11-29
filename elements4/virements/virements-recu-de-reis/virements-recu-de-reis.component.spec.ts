import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VirementsRecuDeReisComponent } from './virements-recu-de-reis.component';

describe('VirementsRecuDeReisComponent', () => {
  let component: VirementsRecuDeReisComponent;
  let fixture: ComponentFixture<VirementsRecuDeReisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VirementsRecuDeReisComponent]
    });
    fixture = TestBed.createComponent(VirementsRecuDeReisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
