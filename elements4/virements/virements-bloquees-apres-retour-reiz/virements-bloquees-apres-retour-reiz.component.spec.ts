import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VirementsBloqueesApresRetourReizComponent } from './virements-bloquees-apres-retour-reiz.component';

describe('VirementsBloqueesApresRetourReizComponent', () => {
  let component: VirementsBloqueesApresRetourReizComponent;
  let fixture: ComponentFixture<VirementsBloqueesApresRetourReizComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VirementsBloqueesApresRetourReizComponent]
    });
    fixture = TestBed.createComponent(VirementsBloqueesApresRetourReizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
