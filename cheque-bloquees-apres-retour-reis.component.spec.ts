import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChequeBloqueesApresRetourREISComponent } from './cheque-bloquees-apres-retour-reis.component';

describe('ChequeBloqueesApresRetourREISComponent', () => {
  let component: ChequeBloqueesApresRetourREISComponent;
  let fixture: ComponentFixture<ChequeBloqueesApresRetourREISComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChequeBloqueesApresRetourREISComponent]
    });
    fixture = TestBed.createComponent(ChequeBloqueesApresRetourREISComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
