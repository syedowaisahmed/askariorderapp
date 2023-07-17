import { Component, OnInit } from "@angular/core";
import { CheckoutService } from "./checkout.service";
import { CartService } from "src/app/shared/cart/cart.service";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html'
})
export default class CheckoutComponent implements OnInit {

  isPaymentProcessing = false;

  constructor(
    private checkoutService: CheckoutService,
    public cartService: CartService
  ) {}

  ngOnInit() {
  }

  checkout(): void {
    this.isPaymentProcessing = true;
    this.cartService.Cart.subscribe((cart) => {
      this.checkoutService.checkout(cart).subscribe((response) => {
        const sessionUrl = response.sessionUrl;
        window.location.href = sessionUrl;
      });
    })
  }
}
