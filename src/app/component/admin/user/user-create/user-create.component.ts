import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
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
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.pattern('[^@]+@[^\\.]+\\..+')]],
      phone: ['', [Validators.required, Validators.pattern('(09|03)+([0-9]{8})\\b')]],
      address: ['', [Validators.required, Validators.minLength(3)]],
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
