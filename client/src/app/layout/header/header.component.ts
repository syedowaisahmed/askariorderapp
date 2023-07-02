import { Component } from "@angular/core";
import { AuthService } from "src/app/shared/auth/auth.service";
import { CartService } from "src/app/shared/cart/cart.service";

@Component({
  styleUrls: ['./header.component.scss'],
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export default class HeaderComponent {
  constructor(
    public authService: AuthService,
    public cartService: CartService
  ) {}
}
