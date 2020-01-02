import { Component, OnInit } from "@angular/core";
import { ProductService } from "shared/services/product.service";
import { ActivatedRoute } from "@angular/router";
import { AppProduct } from "shared/models/app-products";
import { switchMap } from "rxjs/operators";
import { ShoppingCartService } from "shared/services/shopping-cart.service";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"]
})
export class ProductsComponent implements OnInit {
  products: AppProduct[] = [];
  filterProducts: AppProduct[] = [];
  category;
  cart$: any;
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private shoppingCartService: ShoppingCartService
  ) {}
  async ngOnInit() {
    this.cart$ = await this.shoppingCartService.getCart();
    this.populateProducts();
  }
  private populateProducts() {
    this.productService
      .getAll()
      .pipe(
        switchMap(products => {
          this.products = products;
          return this.route.queryParamMap;
        })
      )
      .subscribe(params => {
        this.category = params.get("category");
        this.applyFilter();
      });
  }
  private applyFilter() {
    this.filterProducts = this.category
      ? this.products.filter(p => {
          return p.category === this.category;
        })
      : this.products;
  }
}
