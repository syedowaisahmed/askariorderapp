import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
})
export class ProductDeleteComponent {
  constructor(
    private dialogRef: MatDialogRef<ProductDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any,
    private productsService: ProductsService
  ) {  }

  deleteProduct(): void {
    this.productsService.deleteProduct(this.data._id).subscribe(
      (response) => {
        // Handle successful delete
        console.log('Product deleted successfully:', response);
        this.dialogRef.close(true);
      },
      (error) => {
        // Handle save error
        console.error('Error deleting product:', error);
        // Optionally, display an error message to the user
      }
    );
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
