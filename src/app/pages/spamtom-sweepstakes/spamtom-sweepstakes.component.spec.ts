import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpamtomSweepstakesComponent } from './spamtom-sweepstakes.component';

describe('SpamtomSweepstakesComponent', () => {
  let component: SpamtomSweepstakesComponent;
  let fixture: ComponentFixture<SpamtomSweepstakesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SpamtomSweepstakesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpamtomSweepstakesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
