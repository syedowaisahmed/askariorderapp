import { NgModule } from "@angular/core";
import { MaterialModule } from "src/app/shared/material/material.module";
import { CommonModule } from "@angular/common";
import OrdersListComponent from "./orders-list/orders-list.component";
import { OrdersRoutingModule } from "./orders-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    OrdersListComponent
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class OrdersModule {}
