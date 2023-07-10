import { Component, OnInit } from "@angular/core";
import { CustomerProductsService } from "../customer-products.service";
import { CartService } from "src/app/shared/cart/cart.service";

@Component({
  selector: 'app-customer-products-list',
  templateUrl: './customer-products-list.component.html'
})
export default class CustomerProductsListComponent implements OnInit {
  filteredProducts: any[] = [];
  minPrice: number = 0;
  maxPrice: number = 1000;
  filterStartDate: Date = new Date();
  filterEndDate: Date = new Date();
  filterOrderStatus: string = 'active';
  filterIsActive: boolean = false;
  selectedStatus: string = 'Stock';
  selectedSize: string = 'small';

  // Sample data for product statuses
  productStatuses = ['Stock', 'OutOfStock', 'New'];

  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 50];

  constructor(
    private customerProductsService: CustomerProductsService,
    private cartService: CartService
  ) {
    // Sample data for demonstration
  }

  ngOnInit() {
    this.customerProductsService.getProducts().subscribe(
      (customerProducts) => {
        this.filteredProducts = customerProducts;
      }
    )
  }

  addToCart(product: any): void {
    this.cartService.addToCart(product);
  }

  viewProductDetail(row: any): void {

  }

  applyFilters() {
  }
}
