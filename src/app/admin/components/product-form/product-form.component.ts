import { Component, OnInit } from "@angular/core";
import { CategoryService } from "shared/services/category.service";
import { ProductService } from "shared/services/product.service";
import { Router, ActivatedRoute } from "@angular/router";
import { take } from "rxjs/operators";
@Component({
  selector: "app-product-form",
  templateUrl: "./product-form.component.html",
  styleUrls: ["./product-form.component.css"]
})
export class ProductFormComponent implements OnInit {
  categories$;
  id;
  product = {};
  constructor(
    private CategoryService: CategoryService,
    private router: Router,
    private productService: ProductService,
    private route: ActivatedRoute
  ) {
    this.categories$ = CategoryService.getAll();
    this.id = this.route.snapshot.paramMap.get("id");
    if (this.id)
      this.productService
        .get(this.id)
        .pipe(take(1))
        .subscribe(p => {
          return (this.product = p);
        });
  }

  ngOnInit() {}
  save(product) {
    if (this.id) this.productService.update(this.id, product);
    else this.productService.create(product);
    this.router.navigate(["/admin/products"]);
  }
  delete() {
    if (!confirm("Are you sure you want to delete it")) return;
    this.productService.delete(this.id);
    this.router.navigate(["/admin/products"]);
  }
  log(produt) {
    console.log(produt);
  }
}
