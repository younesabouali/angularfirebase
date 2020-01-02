import { AppProduct } from "shared/models/app-products";
import { ShoppingCartService } from "shared/services/shopping-cart.service";
import { Component, OnInit } from "@angular/core";
import { Input } from "@angular/core";

@Component({
  selector: "app-product-quantity",
  templateUrl: "./product-quantity.component.html",
  styleUrls: ["./product-quantity.component.css"]
})
export class ProductQuantityComponent implements OnInit {
  @Input("product") product: AppProduct;
  @Input("shopping-cart") shoppingCart;

  constructor(private cartService: ShoppingCartService) {}
  ngOnInit() {}

  addToCart() {
    this.cartService.addToCart(this.product);
  }
  removeFromCart() {
    this.cartService.removeFromCart(this.product);
  }
}
