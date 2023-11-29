import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrelevementRecuDeRiesComponent } from './prelevement-recu-de-ries.component';

describe('PrelevementRecuDeRiesComponent', () => {
  let component: PrelevementRecuDeRiesComponent;
  let fixture: ComponentFixture<PrelevementRecuDeRiesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrelevementRecuDeRiesComponent]
    });
    fixture = TestBed.createComponent(PrelevementRecuDeRiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
