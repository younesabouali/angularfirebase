import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/database";
import { AppProduct } from "shared/models/app-products";
import { take, map } from "rxjs/operators";
import { Observable } from "rxjs";
import { shoppingCart } from "shared/models/shopping-cart";
import { shoppingCartItem } from "shared/models/shopping-cart-item";

@Injectable({
  providedIn: "root"
})
export class ShoppingCartService {
  constructor(private db: AngularFireDatabase) {}
  addToCart(product: AppProduct) {
    this.updateItemQuantity(product, 1);
  }
  removeFromCart(product: AppProduct) {
    this.updateItemQuantity(product, -1);
  }
  async shoppingCartItemCount() {
    let cart = await this.getCart();
    return cart.pipe(
      map(cart => {
        let shoppingCartItemCountNumber: number = 0;
        for (let productId in cart["items"]) {
          shoppingCartItemCountNumber += cart["items"][productId]["quantity"];
        }
        return shoppingCartItemCountNumber;
      })
    );
  }
  async clearCart() {
    let cartId = await this.getOrCreateCartId();
    this.db.object("/shopping-carts/" + cartId + "/items").remove();
  }
  async getCart(): Promise<Observable<shoppingCart>> {
    let cartId = await this.getOrCreateCartId();
    return this.db
      .object("/shopping-carts/" + cartId)
      .snapshotChanges()
      .pipe(
        map(products => {
          return new shoppingCart(products.payload.val()["items"]);
        })
      );
  }
  getItem(cartId, productId) {
    return this.db.object("/shopping-carts/" + cartId + "/items/" + productId);
  }
  private create() {
    return this.db.list("/shopping-carts").push({
      dateCreated: new Date().getTime()
    });
  }
  private async getOrCreateCartId(): Promise<string> {
    let cartId = localStorage.getItem("cartId");
    if (cartId) return cartId;

    let result = await this.create();
    localStorage.setItem("cartId", result.key);
    return result.key;
  }
  private async updateItemQuantity(product: AppProduct, change: number) {
    let cartId = await this.getOrCreateCartId();
    let items$ = this.getItem(cartId, product.key);

    items$
      .snapshotChanges()
      .pipe(take(1))
      .subscribe(item => {
        let quantity =
          ((item.payload.val() && item.payload.val()["quantity"]) || 0) +
          change;
        if (quantity === 0) return items$.remove();
        return items$.update({
          product: product,
          quantity: quantity
        });
      });
  }
}
