import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import CheckoutComponent from "./checkout.component";
import { CheckoutRoutingModule } from "./checkout-routing.module";
import { MaterialModule } from "src/app/shared/material/material.module";
import { NgxStripeModule } from "ngx-stripe";
import { environment } from "src/environments/environment";

@NgModule({
  declarations: [
    CheckoutComponent
  ],
  imports: [
    CommonModule,
    CheckoutRoutingModule,
    MaterialModule,
    FormsModule,
    NgxStripeModule.forRoot(environment.STRIPE_PUBLIC_KEY)
  ]
})
export class CheckoutModule {}
