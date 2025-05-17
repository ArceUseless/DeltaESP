import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecretpipisComponent } from './secretpipis.component';

describe('SecretpipisComponent', () => {
  let component: SecretpipisComponent;
  let fixture: ComponentFixture<SecretpipisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SecretpipisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecretpipisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
