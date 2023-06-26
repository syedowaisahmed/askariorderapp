import { NgModule } from "@angular/core";
import { MaterialModule } from "src/app/shared/material/material.module";
import LoginComponent from "./login/login.component";
import { UsersRoutingModule } from "./users-routing.module";
import RegisterComponent from "./register/register.component";
import ForgotPasswordComponent from "./forgot-password/forgot-password.component";
import ResetPasswordComponent from "./reset-password/reset-password.component";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import UsersListComponent from "./users-list/users-list.component";

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    UsersListComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class UsersModule {}
