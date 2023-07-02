import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminDashboardService {
  private apiUrl = 'http://localhost:5000/api';
  private readonly TOKEN_KEY = 'authToken';

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  public getOrdersSummary(): Observable<any> {
    return this.http.get(`${this.apiUrl}/orders/summary`);
  }
}
