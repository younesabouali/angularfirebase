import { Component, OnInit, Input } from "@angular/core";
import { AppProduct } from "shared/models/app-products";
import { ShoppingCartService } from "shared/services/shopping-cart.service";

@Component({
  selector: "app-product-card",
  templateUrl: "./product-card.component.html",
  styleUrls: ["./product-card.component.css"]
})
export class ProductCardComponent implements OnInit {
  @Input("product") product: AppProduct;
  @Input("show-actions") showActions = true;
  @Input("shopping-cart") shoppingCart;
  constructor(private cartService: ShoppingCartService) {}
  ngOnInit() {}
  addToCart() {
    this.cartService.addToCart(this.product);
  }
}
