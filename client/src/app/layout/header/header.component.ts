import { Component } from "@angular/core";
import { AuthService } from "src/app/shared/auth/auth.service";

@Component({
  styleUrls: ['./header.component.scss'],
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export default class HeaderComponent {
  constructor(public authService: AuthService){}
}
