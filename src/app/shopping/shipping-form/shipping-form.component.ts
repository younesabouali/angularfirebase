import { Component, OnInit, OnDestroy, Input } from "@angular/core";
import { Subscription } from "rxjs";
import { OrderService } from "shared/services/order.service";
import { Router } from "@angular/router";
import { AuthService } from "shared/services/auth.service";
import { Order } from "shared/models/order";
import { shoppingCart } from "shared/models/shopping-cart";

@Component({
  selector: "app-shipping-form",
  templateUrl: "./shipping-form.component.html",
  styleUrls: ["./shipping-form.component.css"]
})
export class ShippingFormComponent implements OnInit, OnDestroy {
  shipping = {};
  userId: string;
  @Input("cart") cart: shoppingCart;

  subscription: Subscription;
  constructor(
    private orderService: OrderService,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.subscription = this.authService.user$.subscribe(
      user => (this.userId = user.uid)
    );
  }
  async placeOrder() {
    let order = new Order(this.userId, this.shipping, this.cart);

    const result = await this.orderService.placeOrder(order);
    this.router.navigate(["order-success", result.key]);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
