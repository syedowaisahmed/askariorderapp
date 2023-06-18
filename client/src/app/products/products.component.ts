import { Component, OnInit } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource } from "@angular/material/table";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html'
})
export default class ProductsComponent implements OnInit {

  productsSource: MatTableDataSource<Array<any>> = new MatTableDataSource();

  constructor(private http: HttpClient) {
    // Sample data for demonstration

  }

  ngOnInit() {
    this.http.get<any[]>('http://localhost:5000/products').subscribe((products) => {
      products = products.map((product) => {
        return {
          ...product,
          qty: 100,
          totalPrice: product.price * 100
        }
      });
      this.productsSource = new MatTableDataSource(products);
    })
  }

  productsTableColumns: string[] = ['_id', 'name', 'price', 'description', 'qty', 'totalPrice'];
}
