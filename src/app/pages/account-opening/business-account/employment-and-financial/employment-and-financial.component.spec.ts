import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmploymentAndFinancialComponent } from './employment-and-financial.component';

describe('EmploymentAndFinancialComponent', () => {
  let component: EmploymentAndFinancialComponent;
  let fixture: ComponentFixture<EmploymentAndFinancialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmploymentAndFinancialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmploymentAndFinancialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
