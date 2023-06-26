import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductsService } from '../products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
})
export class ProductEditComponent {
  editForm: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<ProductEditComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any,
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private router: Router
  ) {
    this.editForm = this.formBuilder.group({
      name: data.name,
      price: data.price,
      description: data.description,
    });
  }

  updateProduct(): void {
    if (this.editForm.valid) {
      const updatedProduct = this.editForm.value;
      this.productsService.updateProduct(this.data._id, updatedProduct).subscribe(
        (response) => {
          // Handle successful save
          console.log('Product updated successfully:', response);
          this.dialogRef.close(updatedProduct);
        },
        (error) => {
          // Handle save error
          console.error('Error saving product:', error);
          // Optionally, display an error message to the user
        }
      );
    }
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
