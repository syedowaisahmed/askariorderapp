import { NgModule } from "@angular/core";
import { MaterialModule } from "src/app/shared/material/material.module";
import { CommonModule } from "@angular/common";
import CustomerProductsListComponent from "./customer-products-list/customer-products-list.component";
import { CustomerProductsRoutingModule } from "./customer-products-routing.module";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    CustomerProductsListComponent
  ],
  imports: [
    CommonModule,
    CustomerProductsRoutingModule,
    MaterialModule,
    FormsModule
  ]
})
export class CustomerProductsModule {}
