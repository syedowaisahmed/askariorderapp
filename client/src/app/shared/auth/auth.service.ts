  import { Injectable } from '@angular/core';
  import { HttpClient } from '@angular/common/http';
  import { Observable } from 'rxjs';
  import { Router } from '@angular/router';
  import * as jwt_decode from 'jwt-decode';


  @Injectable({
    providedIn: 'root'
  })
  export class AuthService {
    private apiUrl = 'http://localhost:5000/api';
    private readonly TOKEN_KEY = 'authToken';
    private readonly ADMIN = 'ADMIN';

    constructor(
      private http: HttpClient,
      private router: Router
      ) { }

    login(email: string, password: string): Observable<any> {
      const loginData = { email, password };
      return this.http.post<any>(`${this.apiUrl}/auth`, loginData);
    }

    logout(): void {
      this.removeToken();
      this.router.navigate(['/users/login']);
    }

    register(newUser: any): Observable<any> {
      return this.http.post<any>(`${this.apiUrl}/users`, newUser);
    }

    get isLoggedIn(): boolean {
      return !!this.getToken();
    }

    get userEmail(): any {
      const token = this.getToken();
      if (token) {
        const decodedToken: any = jwt_decode.default(token || '');
        return decodedToken.email;
      } else {
        return '';
      }
    }

    get username(): any {
      const token = this.getToken();
      if (token) {
        const decodedToken: any = jwt_decode.default(token || '');
        return decodedToken.username;
      } else {
        return '';
      }
    }

    get isAdmin(): boolean {
      const token = this.getToken();
      if (token) {
        const decodedToken: any = jwt_decode.default(token || '');
        return decodedToken.role.toString().toUpperCase() === 'ADMIN';
      } else {
        return false;
      }
    }

    setToken(token: string): void {
      localStorage.setItem(this.TOKEN_KEY, JSON.stringify(token));
    }

    getToken(): any {
      const jwtToken = localStorage.getItem(this.TOKEN_KEY);
      if (jwtToken) {
        const token = JSON.parse(jwtToken).token;
        return token || null;
      } else {
        return null;
      }
    }

    setUserRole(role: string): void {
      localStorage.setItem(this.ADMIN, role);
    }

    removeToken(): void {
      localStorage.removeItem(this.TOKEN_KEY);
    }
  }
