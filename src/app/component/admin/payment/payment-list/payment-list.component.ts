import {Component, OnInit} from '@angular/core';
import {Payment} from '../../../../model/payment.model';
import {PaymentService} from '../../../../service/payment.service';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-payment-list',
  templateUrl: './payment-list.component.html',
  styleUrls: ['./payment-list.component.css']
})
export class PaymentListComponent implements OnInit {

  paymentList: Payment[] = [];
  payment: Payment;
  content: string;
  searchString: string;

  constructor(private paymentService: PaymentService) {
  }

  ngOnInit() {
    this.paymentService.getPaymentList().subscribe(next => {
        this.paymentList = next;
        console.log(this.paymentList);
      }, err =>
        (this.content = this.content = JSON.parse(err.error).message)
    );
  }
}
