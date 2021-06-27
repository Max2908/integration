import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CreateUser } from '../shared/models/user/user';
import { AuthService } from '../shared/services/auth/auth.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {

  createForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  onSubmit(): void {
    const createUser: CreateUser = {
      username: this.f.username.value,
      firstName: this.f.firstName.value,
      lastName: this.f.lastName.value,
      password: this.f.password.value,
      email: this.f.email.value
    }

    this.authService.createUser(createUser)

  }
  get f() {

    return this.createForm.controls
  }

  private initForm(): void {
    this.createForm = this.formBuilder.group({

      lastName: ['', Validators.required],
      username: ['', Validators.required],
      firstName: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', Validators.required]


    })

  }
}
