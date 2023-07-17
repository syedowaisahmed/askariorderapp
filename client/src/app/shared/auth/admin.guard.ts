// admin.guard.ts

import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isAdmin) {
      return true;
    } else {
      // User is not logged in as admin, redirect to the login page or any other desired page
      this.router.navigate(['/users/login']);
      return false;
    }
  }
}
