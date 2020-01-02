import { Component, OnInit, OnDestroy } from "@angular/core";
import { ShoppingCartService } from "shared/services/shopping-cart.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-shopping-cart",
  templateUrl: "./shopping-cart.component.html",
  styleUrls: ["./shopping-cart.component.css"]
})
export class ShoppingCartComponent implements OnInit, OnDestroy {
  productsId$;

  cart$;
  constructor(private shoppingCartService: ShoppingCartService) {}

  async ngOnInit() {
    this.cart$ = await this.shoppingCartService.getCart();
  }
  ngOnDestroy() {}
  clearCart() {
    this.shoppingCartService.clearCart();
  }
}
