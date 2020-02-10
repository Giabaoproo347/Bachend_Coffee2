import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../../../../model/user.model';
import {UserService} from '../../../../user/_services/user.service';

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
      username: ['', [Validators.required, Validators.minLength(1)]],
      phone: ['', [Validators.required, Validators.pattern('(09|03)+([0-9]{8})\\b')]],
      email: ['', [Validators.required, Validators.pattern('[^@]+@[^\\.]+\\..+')]],
      address: ['', [Validators.required, Validators.minLength(3)]]
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
