import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import LoginComponent from './login/login.component';
import RegisterComponent from './register/register.component';
import ForgotPasswordComponent from './forgot-password/forgot-password.component';
import ResetPasswordComponent from './reset-password/reset-password.component';
import UsersListComponent from './users-list/users-list.component';

const routes: Routes = [
  {
    path: '', component: UsersListComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup', component: RegisterComponent
  },
  {
    path: 'forgot-password', component: ForgotPasswordComponent
  },
  {
    path: 'reset-password', component: ResetPasswordComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
