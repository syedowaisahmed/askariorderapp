import { Component, OnInit } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html'
})
export default class ForgotPasswordComponent implements OnInit {

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
  }
}
