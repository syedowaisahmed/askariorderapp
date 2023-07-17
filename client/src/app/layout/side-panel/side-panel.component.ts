import { Component } from "@angular/core";
import { AuthService } from "src/app/shared/auth/auth.service";
import { CartService } from "src/app/shared/cart/cart.service";

@Component({
  selector: 'app-side-panel',
  templateUrl: './side-panel.component.html'
})
export default class SidePanelComponent {

  constructor(
    public authService: AuthService,
    public cartService: CartService
  ) {}
}
