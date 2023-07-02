import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private apiUrl = 'http://localhost:5000/api';

  constructor(private http: HttpClient) {}

  public newProduct(product: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/products/`, product);
  }

  public updateProduct(productId: any, product: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/products/${productId}`, product);
  }

  public deleteProduct(productId: any): Observable<any> {
    return this.http.delete(`${this.apiUrl}/products/${productId}`);
  }
}
