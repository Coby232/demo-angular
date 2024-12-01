import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreferencesAndConsentComponent } from './preferences-and-consent.component';

describe('PreferencesAndConsentComponent', () => {
  let component: PreferencesAndConsentComponent;
  let fixture: ComponentFixture<PreferencesAndConsentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreferencesAndConsentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreferencesAndConsentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
