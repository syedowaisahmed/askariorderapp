import { Component } from "@angular/core";
import { AuthService } from "src/app/shared/auth/auth.service";

@Component({
  selector: 'app-side-panel',
  templateUrl: './side-panel.component.html'
})
export default class SidePanelComponent {

  constructor(public authService: AuthService) {}
}
