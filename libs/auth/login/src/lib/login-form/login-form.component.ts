import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from 'libs/auth/services/auth.service';
import {UserService} from 'libs/auth/services/user.service';

@Component({
  selector: 'bird-management-ui-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private userSerivce: UserService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login(): void {
    if (this.loginForm.valid) {
      const {username, password} = this.loginForm.value;
      const isLogin = this.authService.login(username, password);
      if (isLogin) {
        //neu login thanh cong, chuyen sang trang ....

        //set user infor vao local storage
        // this.userSerivce.saveUser(JSON.stringify({ username, password }));

        // set token vao cookie
        // document.cookie = `token=${'bo token vao day'};expires=${'bo expires vao day'};path=/`;
        alert('login success');
      } else {
        this.router.navigate(['']);
      }
    }
  }
}
