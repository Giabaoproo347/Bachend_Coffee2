import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Payment} from '../../../../model/payment.model';
import {PaymentService} from '../../../../service/payment.service';

@Component({
  selector: 'app-payment-delete',
  templateUrl: './payment-delete.component.html',
  styleUrls: ['./payment-delete.component.css']
})
export class PaymentDeleteComponent implements OnInit {

  payment: Payment;

  constructor(
    private paymentService: PaymentService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.paymentService.getPayment(id).subscribe(
      next => {
        this.payment = next;
      },
      error => {
        this.payment = null;
        console.log('error');
      }
    );
  }

  deletePayment(id) {
    console.log(id);
    this.paymentService.deletePayment(id).subscribe(
      next => {
        this.router.navigate(['payment-list']);
      }
    );
  }

}
