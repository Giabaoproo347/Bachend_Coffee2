import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Payment} from '../../../../model/payment.model';
import {PaymentService} from '../../../../service/payment.service';

@Component({
  selector: 'app-payment-create',
  templateUrl: './payment-create.component.html',
  styleUrls: ['./payment-create.component.css']
})
export class PaymentCreateComponent implements OnInit {

  paymentForm: FormGroup;
  payment: Payment;
  message = false;

  constructor(
    private paymentService: PaymentService,
    private fb: FormBuilder,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.paymentForm = this.fb.group({
      id: '',
      name: ['', [Validators.required, Validators.minLength(1)]],
      date: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.paymentForm.valid) {
      const {value} = this.paymentForm;
      this.payment = value;
      this.paymentService.createPayment(this.payment).subscribe(
        next => {
          console.log(next);
          this.message = true;
          this.ngOnInit();
        }
      );
    } else {
      console.log('error');
    }
  }


}
