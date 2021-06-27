import {
  Component,
  OnInit
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { LoginUser } from '../shared/models/user/user';
import { AuthService } from '../shared/services/auth/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService

  ) { }

  ngOnInit(): void {

    this.initForm();
    console.log(localStorage.getItem('listUsers'));
  }

  onSubmit(): void {
    const userLogin: LoginUser = {
      username: this.f.username.value,
      password: this.f.password.value
    }

    this.authService.login(userLogin)
  }
  get f() {

    return this.loginForm.controls
  }

  private initForm(): void {
    this.loginForm = this.formBuilder.group({

      username: ['', Validators.required],
      password: ['', Validators.required],


    })

  }

}
