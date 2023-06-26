import { Component, OnInit } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource } from "@angular/material/table";
import { MatDialog } from "@angular/material/dialog";
import { ProductEditComponent } from "../product-edit/product-edit.component";
import { Router } from "@angular/router";
import { ProductDeleteComponent } from "../product-delete/product-delete.component";

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html'
})
export default class ProductsListComponent implements OnInit {

  productsSource: MatTableDataSource<any> = new MatTableDataSource();

  constructor(
    private http: HttpClient,
    private dialog: MatDialog,
    private router: Router
  ) {
    // Sample data for demonstration
  }

  ngOnInit() {
    this.http.get<any[]>('http://localhost:5000/api/products').
    subscribe(
      (products) => {
        this.productsSource = new MatTableDataSource(products);
      }
    )
  }

  productsTableColumns: string[] = ['_id', 'name', 'price', 'description', 'actions'];

  editRow(row: any): void {
    const product = this.productsSource.data.find((p) => p._id === row._id);
    const dialogRef = this.dialog.open(ProductEditComponent, {
      data: { _id: row._id, ...product },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        // Perform update operation with the updated product data
        console.log('Updated product:', result);
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate(['products']);
        });
      }
    });
  }

  deleteRow(row: any): void {
    const dialogRef = this.dialog.open(ProductDeleteComponent, {
      width: '400px', // Adjust the width as per your requirements
      data: { _id: row._id } // Pass any necessary data to the dialog
    });

    dialogRef.afterClosed().subscribe(result => {
      // Handle any necessary actions after the dialog is closed
      console.log('The dialog was closed');
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate(['products']);
        });
    });
  }

  viewProductDetail(row: any): void {

  }
}
