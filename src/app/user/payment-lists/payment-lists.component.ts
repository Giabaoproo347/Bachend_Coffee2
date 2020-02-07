import {Component, OnInit} from '@angular/core';
import {Payment} from '../../model/payment.model';
import {PaymentService} from '../../service/payment.service';
import {TokenStorageService} from '../_services/token-storage.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-payment-lists',
  templateUrl: './payment-lists.component.html',
  styleUrls: ['./payment-lists.component.css']
})
export class PaymentListsComponent implements OnInit {

  paymentList: Payment[] = [];
  payment: Payment;
  content: string;
  searchString: any;
  status = ['Hủy đơn hàng'];


  constructor(private paymentService: PaymentService,
              private token: TokenStorageService) {
  }

  ngOnInit() {
    const id = this.token.getUser().id;
    this.paymentService.findAllByUserId(id).subscribe(next => this.paymentList = next);
    console.log(this.paymentList);
  }
}
