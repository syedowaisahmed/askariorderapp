import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  private apiUrl = 'http://localhost:5000/api';

  constructor(private http: HttpClient) {}

  public getOrders(): Observable<any> {
    return this.http.get(`${this.apiUrl}/orders/`);
  }

  public filterOrders(filters: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/orders/filter`, filters);
  }
}
