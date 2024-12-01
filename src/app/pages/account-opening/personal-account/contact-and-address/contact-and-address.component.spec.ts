import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactAndAddressComponent } from './contact-and-address.component';

describe('ContactAndAddressComponent', () => {
  let component: ContactAndAddressComponent;
  let fixture: ComponentFixture<ContactAndAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactAndAddressComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactAndAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
