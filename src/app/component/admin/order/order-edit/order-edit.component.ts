import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Order} from '../../../../model/order.model';
import {OrderService} from '../../../../service/order.service';

@Component({
  selector: 'app-order-edit',
  templateUrl: './order-edit.component.html',
  styleUrls: ['./order-edit.component.css']
})
export class OrderEditComponent implements OnInit {

  order: Order;
  orderForm: FormGroup;
  message = false;
  constructor(
    private orderService: OrderService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.orderForm = this.fb.group({
      purchaseDate: ['', [Validators.required]],
      deliveryDate: ['', [Validators.required]],
      description: ['', [Validators.required]]
    });
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.orderService.getOrder(id).subscribe(next => {
        this.order = next;
        console.log(this.order);
        this.orderForm.patchValue(this.order);
        console.log(this.orderForm);
      },
      error => {
        console.log(error);
        this.order = null;
      });
  }

  onSubmit() {
    if (this.orderForm.valid) {
      const {value} = this.orderForm;
      const data = {
        ...this.order,
        ...value
      };
      this.orderService.editOrder(data).subscribe(next => {
          this.message = true;
          this.ngOnInit();
        },
        error => console.log(error));
    }
  }

}
