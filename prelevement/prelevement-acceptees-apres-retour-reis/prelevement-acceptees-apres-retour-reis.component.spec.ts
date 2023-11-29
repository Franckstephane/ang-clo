import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrelevementAccepteesApresRetourReisComponent } from './prelevement-acceptees-apres-retour-reis.component';

describe('PrelevementAccepteesApresRetourReisComponent', () => {
  let component: PrelevementAccepteesApresRetourReisComponent;
  let fixture: ComponentFixture<PrelevementAccepteesApresRetourReisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrelevementAccepteesApresRetourReisComponent]
    });
    fixture = TestBed.createComponent(PrelevementAccepteesApresRetourReisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
