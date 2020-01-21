import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Payment} from '../../../../model/payment.model';
import {PaymentService} from '../../../../service/payment.service';

@Component({
  selector: 'app-payment-edit',
  templateUrl: './payment-edit.component.html',
  styleUrls: ['./payment-edit.component.css']
})
export class PaymentEditComponent implements OnInit {

  payment: Payment;
  paymentForm: FormGroup;
  message: boolean;

  constructor(
    private paymentService: PaymentService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.paymentForm = this.fb.group({
      name: ['', [ Validators.required, Validators.minLength(1) ]],
      date: ['', Validators.required],
    });
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.paymentService.getPayment(id).subscribe(
      next => {
        this.payment = next;
        console.log(this.payment);
        this.paymentForm.patchValue(this.payment);
        console.log(this.paymentForm);
      },
      error => {
        console.log(error);
        this.payment = null;
      }
    );
  }
  onSubmit() {
    if (this.paymentForm.valid) {
      const {value} = this.paymentForm;
      const data = {
        ...this.payment,
        ...value
      };
      this.paymentService.editPayment(data).subscribe(
        next => {
          this.message = true;
          this.ngOnInit();
        },
        error => {
          console.log(error);
        }
      );
    }
  }

}
