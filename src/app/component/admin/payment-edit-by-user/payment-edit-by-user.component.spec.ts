import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentEditByUserComponent } from './payment-edit-by-user.component';

describe('PaymentEditByUserComponent', () => {
  let component: PaymentEditByUserComponent;
  let fixture: ComponentFixture<PaymentEditByUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentEditByUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentEditByUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
