import { NgModule } from "@angular/core";
import ProductsListComponent from "src/app/pages/products/products-list/products-list.component";
import { MaterialModule } from "src/app/shared/material/material.module";
import { ProductsRoutingModule } from "./products-routing.module";
import { ProductEditComponent } from "./product-edit/product-edit.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ProductDeleteComponent } from "./product-delete/product-delete.component";

@NgModule({
  declarations: [
    ProductsListComponent,
    ProductEditComponent,
    ProductDeleteComponent
  ],
  imports: [
    ProductsRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProductsModule {}
