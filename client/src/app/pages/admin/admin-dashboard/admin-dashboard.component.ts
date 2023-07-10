import { Component, OnInit } from "@angular/core";
import { AdminDashboardService } from "./admin-dashboard.service";

interface Order {
  product: string;
  month: string;
  quantity: number;
}

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html'
})
export default class AdminDashboardComponent implements OnInit {

  ordersSummary: any = {};
  chartData: any[] = [];
  orders: Order[] = [
    { product: 'Product A', month: 'Jan', quantity: 10 },
    { product: 'Product B', month: 'Jan', quantity: 20 },
    { product: 'Product A', month: 'Feb', quantity: 15 },
    { product: 'Product C', month: 'Feb', quantity: 8 },
    { product: 'Product C', month: 'Feb', quantity: 8 },
    { product: 'Product C', month: 'Mar', quantity: 8 },
    { product: 'Product D', month: 'Feb', quantity: 8 },
    { product: 'Product D', month: 'Mar', quantity: 8 },
    { product: 'Product D', month: 'Feb', quantity: 8 },
    { product: 'Product C', month: 'Apr', quantity: 8 },
    { product: 'Product C', month: 'May', quantity: 8 },
    { product: 'Product E', month: 'Jun', quantity: 8 },
    { product: 'Product Z', month: 'Dec', quantity: 1000 },


    // Add more order data here...
  ];

  constructor(private adminDashboardService: AdminDashboardService) {}

  ngOnInit() {
    this.adminDashboardService.getOrdersSummary().subscribe((ordersSummary) => {
      this.ordersSummary = ordersSummary;
    });
    this.chartData = this.transformData(this.orders);
  }

  private transformData(orders: Order[]): any[] {
    const groupedData: any = {};

    orders.forEach((order) => {
      if (!groupedData[order.month]) {
        groupedData[order.month] = {
          name: order.month,
          value: 0
        };
      }

      groupedData[order.month].value += order.quantity;
    });

    return Object.values(groupedData);
  }
}
