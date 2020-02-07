import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Payment} from '../../model/payment.model';
import {PaymentService} from '../../service/payment.service';

@Component({
  selector: 'app-user-payment-list',
  templateUrl: './user-payment-list.component.html',
  styleUrls: ['./user-payment-list.component.css']
})
export class UserPaymentListComponent implements OnInit {

  @Input() paymentList: Payment[];
  @Output() updateList = new EventEmitter();
  constructor(private paymentService: PaymentService) {
  }

  ngOnInit() {
  }

  changeToCancel(id) {
    this.paymentService.changeOrderStatus(id, 'cancel').subscribe(next => {
      this.updateList.emit();
    });
  }
}

