import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/database";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class ProductService {
  constructor(private db: AngularFireDatabase) {}
  create(product) {
    this.db.list("/products").push(product);
  }
  getAll() {
    return this.db
      .list("/products")
      .snapshotChanges()
      .pipe(
        map(products =>
          products.map(product =>
            Object.assign(
              {},
              {
                category: product.payload.val()["category"],
                title: product.payload.val()["title"],
                price: product.payload.val()["price"],
                imageUrl: product.payload.val()["imageUrl"],
                key: product.key
              }
            )
          )
        )
      );
  }
  get(productId) {
    return this.db
      .object("/products/" + productId)
      .snapshotChanges()
      .pipe(
        map(product =>
          Object.assign(
            {},
            {
              category: product.payload.val()["category"],
              title: product.payload.val()["title"],
              price: product.payload.val()["price"],
              imageUrl: product.payload.val()["imageUrl"],
              key: product.key
            }
          )
        )
      );
  }
  update(productId, product) {
    return this.db.object("/products/" + productId).update(product);
  }
  delete(productId) {
    return this.db.object("/products/" + productId).remove();
  }
}
