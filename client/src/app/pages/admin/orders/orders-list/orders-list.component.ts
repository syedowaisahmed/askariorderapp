import { Component, OnInit } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { OrdersService } from "../orders.service";
import { PageEvent } from "@angular/material/paginator";

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html'
})
export default class OrdersListComponent implements OnInit {

  ordersDataSource: MatTableDataSource<any> = new MatTableDataSource();

  pageSize: number = 10;
  pageSizeOptions: number[] = [5, 10, 25];
  pageIndex: number = 0;

  filterMinPrice: number = 0;
  filterMaxPrice: number = 5000;
  filterStartDate: Date = new Date();
  filterEndDate: Date = new Date();
  filterOrderStatus: string = 'active';
  filterIsActive: boolean = false;
  selectedStatus: string = 'active';

  // Sample data for order statuses
  orderStatuses = ['Pending', 'Completed', 'Cancelled'];

  // Filtered orders
  filteredOrders: any[] = [];

  // All orders
  orders: any[] = [
    // Sample order data
    // ...
  ];

  constructor(
    private ordersService: OrdersService
  ) {
    // Sample data for demonstration
  }

  ngOnInit() {
    this.ordersService.getOrders().subscribe(
      (orders) => {
        this.ordersDataSource = new MatTableDataSource(orders);
        this.orders = orders;
      }
    )
  }

  ordersTableColumns: string[] = [
    'orderId',
    'user',
    'product',
    'quantity',
    'orderDate',
    'totalAmount',
    //'discountAmount',
    'orderStatus',
    // Add any additional fields here
  ];

  applyFilter() {
    this.filteredOrders = this.orders.filter((order) => {
      // Check price range
      if (this.filterMinPrice && order.price < this.filterMinPrice) {
        return false;
      }
      if (this.filterMaxPrice && order.price > this.filterMaxPrice) {
        return false;
      }

      // Check date range
      if (this.filterStartDate && order.date < this.filterStartDate) {
        return false;
      }
      if (this.filterEndDate && order.date > this.filterEndDate) {
        return false;
      }

      // Check order status
      if (this.filterOrderStatus && order.status !== this.filterOrderStatus) {
        return false;
      }

      // Check active/inactive filter
      if (this.filterIsActive && !order.isActive) {
        return false;
      }

      // All filters passed, include the order
      return true;
    });
  }

  pageChanged(event: PageEvent) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
  }
}
