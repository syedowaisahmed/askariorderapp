import { Component, OnInit } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html'
})
export default class ResetPasswordComponent implements OnInit {

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
  }
}
