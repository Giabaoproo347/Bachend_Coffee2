import {Component, OnInit} from '@angular/core';
import {Categories} from '../../../../model/categories.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CategoriesService} from '../../../../service/categories.service';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../../../../model/user.model';
import {UserService} from '../../../../user/_services/user.service';
import {Order} from '../../../../model/order.model';
import {OrderService} from '../../../../service/order.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  user: User;
  userForm: FormGroup;
  message = false;
  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.userForm = this.fb.group({
      username: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      email: ['', [Validators.required]],
      address: ['', [Validators.required]]
    });
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.userService.getUserById(id).subscribe(next => {
        this.user = next;
        console.log(this.user);
        this.userForm.patchValue(this.user);
        console.log(this.userForm);
      },
      error => {
        console.log(error);
        this.user = null;
      });
  }

  onSubmit() {
    if (this.userForm.valid) {
      const {value} = this.userForm;
      const data = {
        ...this.user,
        ...value
      };
      this.userService.editUser(data).subscribe(next => {
          this.message = true;
          this.ngOnInit();
        },
        error => console.log(error));
    }
  }

}
