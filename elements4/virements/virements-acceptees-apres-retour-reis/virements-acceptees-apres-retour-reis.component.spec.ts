import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VirementsAccepteesApresRetourReisComponent } from './virements-acceptees-apres-retour-reis.component';

describe('VirementsAccepteesApresRetourReisComponent', () => {
  let component: VirementsAccepteesApresRetourReisComponent;
  let fixture: ComponentFixture<VirementsAccepteesApresRetourReisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VirementsAccepteesApresRetourReisComponent]
    });
    fixture = TestBed.createComponent(VirementsAccepteesApresRetourReisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
