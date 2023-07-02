  import { Injectable } from '@angular/core';
  import { HttpClient } from '@angular/common/http';
  import { Observable } from 'rxjs';
  import { Router } from '@angular/router';

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

    get isAdmin(): boolean {
      const token = this.getToken();
      return this.isAdminRole(token);
    }

    setToken(token: string): void {
      localStorage.setItem(this.TOKEN_KEY, token);
    }

    getToken(): string | null {
      return localStorage.getItem(this.TOKEN_KEY);
    }

    setUserRole(role: string): void {
      localStorage.setItem(this.ADMIN, role);
    }

    removeToken(): void {
      localStorage.removeItem(this.TOKEN_KEY);
    }

    isAdminRole(token: any): boolean {
      return false;
    }
  }
