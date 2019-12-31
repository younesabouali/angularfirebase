import { Component, OnInit, OnDestroy } from "@angular/core";
import { ProductService } from "./../../product.service";
import { map } from "rxjs/operators";
import { Subscription } from "rxjs";
import { DataSnapshot } from "@angular/fire/database/interfaces";
import { AppProduct } from "./../../models/app-products";
@Component({
  selector: "app-admin-products",
  templateUrl: "./admin-products.component.html",
  styleUrls: ["./admin-products.component.css"]
})
export class AdminProductsComponent implements OnInit, OnDestroy {
  products: AppProduct[];
  subscription: Subscription;
  filterProducts: any[];
  constructor(private productService: ProductService) {
    this.subscription = this.productService
      .getAll()
      .subscribe(products => (this.filterProducts = this.products = products));
  }
  filter(query: string) {
    this.filterProducts = query
      ? this.products.filter(p => {
          return p.title.toLocaleLowerCase().includes(query);
        })
      : this.products;
  }
  ngOnInit() {}
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
