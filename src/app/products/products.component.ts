import { Component, OnInit } from "@angular/core";
import { ProductService } from "./../product.service";
import { CategoryService } from "./../category.service";
import { ActivatedRoute } from "@angular/router";
import { AppProduct } from "./../models/app-products";
import { switchMap } from "rxjs/operators";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"]
})
export class ProductsComponent {
  products: AppProduct[] = [];
  filterProducts: AppProduct[] = [];
  category;
  constructor(productService: ProductService, route: ActivatedRoute) {
    productService
      .getAll()
      .pipe(
        switchMap(products => {
          this.products = products;
          return route.queryParamMap;
        })
      )
      .subscribe(params => {
        this.category = params.get("category");
        this.filterProducts = this.category
          ? this.products.filter(p => {
              return p.payload.val().category === this.category;
            })
          : this.products;
      });
  }
}
