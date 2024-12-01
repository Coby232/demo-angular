import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentificationAndVerificationComponent } from './identification-and-verification.component';

describe('IdentificationAndVerificationComponent', () => {
  let component: IdentificationAndVerificationComponent;
  let fixture: ComponentFixture<IdentificationAndVerificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IdentificationAndVerificationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdentificationAndVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
