import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CustomerProductsService {
  private apiUrl = 'http://localhost:5000/api';

  constructor(private http: HttpClient) {}

  public getProducts(): Observable<any> {
    return this.http.get(`${this.apiUrl}/products/`);
  }
}
