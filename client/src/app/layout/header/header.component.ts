import { Component } from "@angular/core";
import { AuthService } from "src/app/shared/auth/auth.service";
import { CartService } from "src/app/shared/cart/cart.service";
import { Socket } from 'ngx-socket-io';
import { Router } from "@angular/router";

@Component({
  styleUrls: ['./header.component.scss'],
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export default class HeaderComponent {
  product: any;

  constructor(
    public authService: AuthService,
    public cartService: CartService,
    private socket: Socket,
    private router: Router
  ) {
    this.socket.on('new-product-arrived', (product: any) => {
      this.product = product;
    })
  }

  checkout(): void {
    this.router.navigate(['checkout']);
  }
}
