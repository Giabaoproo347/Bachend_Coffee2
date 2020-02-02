import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Categories} from '../../../../model/categories.model';
import {CategoriesService} from '../../../../service/categories.service';
import {Router} from '@angular/router';
import {User} from '../../../../model/user.model';
import {UserService} from '../../../../user/_services/user.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  userForm: FormGroup;
  user: User;
  message = false;
  constructor(
    private userService: UserService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.userForm = this.fb.group({
      id: '',
      name: ['', [Validators.required, Validators.minLength(1)]],
      phone: ['', [Validators.required, Validators.minLength(1)]],
      email: ['', [Validators.required, Validators.minLength(1)]],
      address: ['', [Validators.required, Validators.minLength(1)]],
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      const {value} = this.userForm;
      this.user = value;
      this.userService.createUser(this.user).subscribe(
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
