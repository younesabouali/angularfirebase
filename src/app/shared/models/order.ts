import { shoppingCart } from "./shopping-cart";
export class Order {
  datePlaced: number;
  items: any[];

  constructor(
    public userId: string,
    public shipping: any,
    shoppingCart: shoppingCart
  ) {
    this.datePlaced = new Date().getTime();
    this.items = shoppingCart.items.map(i => {
      return {
        product: {
          tite: i.product.title,
          imageUrl: i.product.imageUrl,
          price: i.product.price
        },
        quanity: i.quantity,
        totalPrice: i.totalPrice
      };
    });
  }
}
