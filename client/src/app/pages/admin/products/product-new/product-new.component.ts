import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-new',
  templateUrl: './product-new.component.html',
})
export class ProductNewComponent {
  newForm: FormGroup;
  imageFile: File;

  constructor(
    private dialogRef: MatDialogRef<ProductNewComponent>,
    private formBuilder: FormBuilder,
    private productsService: ProductsService
  ) {
    this.imageFile = new File([], '');
    this.newForm = this.formBuilder.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
      image: new FormControl(null),
      description: ['']
    });
  }

  createProduct(): void {
    if (this.newForm.valid) {
      const newProduct = this.newForm.value;
      this.productsService.newProduct(newProduct).subscribe(
        (response) => {
          // Handle successful save
          console.log('Product created successfully:', response);
          this.dialogRef.close(true);
        },
        (error) => {
          // Handle save error
          console.error('Error creating product:', error);
          // Optionally, display an error message to the user
        }
      );
    }
  }

  handleImageUpload(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length) {
      this.imageFile = inputElement.files[0];
    }
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
