import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrelevementBloqueesApresRetourReisComponent } from './prelevement-bloquees-apres-retour-reis.component';

describe('PrelevementBloqueesApresRetourReisComponent', () => {
  let component: PrelevementBloqueesApresRetourReisComponent;
  let fixture: ComponentFixture<PrelevementBloqueesApresRetourReisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrelevementBloqueesApresRetourReisComponent]
    });
    fixture = TestBed.createComponent(PrelevementBloqueesApresRetourReisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
