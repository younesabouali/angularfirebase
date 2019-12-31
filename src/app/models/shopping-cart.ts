import { shoppingCartItem } from "./shopping-cart-item";
import { AppProduct } from "./app-products";
export class shoppingCart {
  items: shoppingCartItem[] = [];
  constructor(private itemMap: { [productId: string]: shoppingCartItem }) {
    this.itemMap = itemMap || {};
    for (let productId in itemMap) {
      let item = itemMap[productId];
      this.items.push(new shoppingCartItem(item.product, item.quantity));
    }
  }
  getQuantity(product: AppProduct) {
    let item = this.itemMap[product.key];
    return item ? item.quantity : 0;
  }
  get productIds() {
    return Object.keys(this.itemMap);
  }
  get totalPrice() {
    let sum = 0;
    for (let productId in this.items) sum += this.items[productId].totalPrice;
    return sum;
  }
  get totalItemCount() {
    let count: number = 0;
    for (let productId in this.itemMap) {
      count += this.itemMap[productId].quantity;
    }
    return count;
  }
}
