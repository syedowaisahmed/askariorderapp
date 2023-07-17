import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'app-payment-success',
  templateUrl: './payment-success.component.html'
})
export default class PaymentSuccessComponent implements OnInit {
  constructor(
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.http.post<any>('http://localhost:5000/api/orders/order-email', {}).subscribe((response) => {
      console.log('email sent');
    });
  }
}
