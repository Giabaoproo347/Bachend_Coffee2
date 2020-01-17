import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Order} from '../../../../model/order.model';
import {OrderService} from '../../../../service/order.service';

@Component({
  selector: 'app-order-delete',
  templateUrl: './order-delete.component.html',
  styleUrls: ['./order-delete.component.css']
})
export class OrderDeleteComponent implements OnInit {

  order: Order;
  constructor(
    private orderService: OrderService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.orderService.getOrder(id).subscribe(next => {
        this.order = next;
      },
      error => {
        this.order = null;
        console.log(error);
      });
  }

  deleteOrder(id) {
    console.log(id);
    this.orderService.deleteOrder(id).subscribe( next => {
      this.router.navigate(['order-list']);
    });
  }

}
