import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder} from '@angular/forms';
import {Order} from '../../../../model/order.model';
import {OrderService} from '../../../../service/order.service';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {

  order: Order;
  constructor(
    private orderService: OrderService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.orderService.getOrder(id).subscribe(next => {
        this.order = next;
      },
      error => {
        console.log(error);
        this.order = null;
      });
  }

}
