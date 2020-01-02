import { AppProduct } from "./app-products";
export class shoppingCartItem {
  constructor(public product: AppProduct, public quantity: number) {}
  get totalPrice() {
    return this.product.price * this.quantity;
  }
}
