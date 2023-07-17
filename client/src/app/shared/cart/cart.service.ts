import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  private cartItems: any[] = [];

  constructor(
  ) { }

  public get Cart(): Observable<any> {
    return this.cart;
  }

  addToCart(product: any): void {
    const item = this.cartItems.find((item) => item.id === product._id);
    if (item) {
      item.qty += 1;
      item.totalAmount = item.basePrice * item.qty;
    } else {
      this.cartItems.push({
        id: product._id,
        productName: product.name,
        qty: 1,
        basePrice: product.price,
        totalAmount: product.price
      });
    }

    this.cart.next({
      items: this.cartItems,
      totalAmount: this.cartItems.reduce((a, b) => a + b.totalAmount, 0)
    });
  }

  removeFromCart(itemToRemove: any): void {
    const itemIndex = this.cartItems.findIndex((item) => item.id === itemToRemove._id);
    if (itemIndex) {
      this.cartItems.splice(itemIndex, 1);
    }

    this.cart.next({
      items: this.cartItems,
      totalAmount: this.cartItems.reduce((a, b) => a + b.totalAmount, 0)
    });
  }
}
