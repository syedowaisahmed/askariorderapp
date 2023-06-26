import { Component, OnInit } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "src/app/shared/auth/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export default class RegisterComponent implements OnInit {

  registrationForm: FormGroup;
  registrationError: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.registrationForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  onSubmit() {
    if (this.registrationForm.invalid) {
      return;
    }

    if (this.registrationForm.valid) {
      const newUser = {
        firstName: this.registrationForm.get('firstname')?.value,
        lastName: this.registrationForm.get('lastname')?.value,
        username: this.registrationForm.get('username')?.value,
        email: this.registrationForm.get('email')?.value,
        password: this.registrationForm.get('password')?.value
      };

      this.authService.register(newUser).subscribe(
        () => {
          this.router.navigateByUrl('/users/login');
        },
        (error) => {
          // Handle registration error
          console.log(error);
          this.registrationError = 'There was some problem creating user. Fix and try again';
        }
      );
    }
  }

  ngOnInit() {
  }
}
