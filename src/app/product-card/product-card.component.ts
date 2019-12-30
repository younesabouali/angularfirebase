import { Component, OnInit, Input } from "@angular/core";
import { AppProduct } from "./../models/app-products";

@Component({
  selector: "app-product-card",
  templateUrl: "./product-card.component.html",
  styleUrls: ["./product-card.component.css"]
})
export class ProductCardComponent implements OnInit {
  @Input("product") product: AppProduct;
  @Input("show-actions") showActions = true;
  constructor() {}

  ngOnInit() {}
}
