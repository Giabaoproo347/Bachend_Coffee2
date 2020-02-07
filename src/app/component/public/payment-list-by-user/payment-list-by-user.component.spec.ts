import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentListByUserComponent } from './payment-list-by-user.component';

describe('PaymentListByUserComponent', () => {
  let component: PaymentListByUserComponent;
  let fixture: ComponentFixture<PaymentListByUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentListByUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentListByUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
