import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CheckoutService {
  private apiUrl = 'http://localhost:5000/api';

  constructor(
    private http: HttpClient
  ) {}

  public checkout(cart: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/stripe/checkout/`, cart);
  }
}
