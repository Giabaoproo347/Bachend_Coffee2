import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPaymentListComponent } from './user-payment-list.component';

describe('UserPaymentListComponent', () => {
  let component: UserPaymentListComponent;
  let fixture: ComponentFixture<UserPaymentListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPaymentListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPaymentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
