import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VirementsRecuDeWebClearingComponent } from './virements-recu-de-web-clearing.component';

describe('VirementsRecuDeWebClearingComponent', () => {
  let component: VirementsRecuDeWebClearingComponent;
  let fixture: ComponentFixture<VirementsRecuDeWebClearingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VirementsRecuDeWebClearingComponent]
    });
    fixture = TestBed.createComponent(VirementsRecuDeWebClearingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
