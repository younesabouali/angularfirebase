import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProductsComponent } from "./products/products.component";
import { ShoppingCartComponent } from "./shopping-cart/shopping-cart.component";
import { CheckOutComponent } from "./check-out/check-out.component";
import { OrderSuccessComponent } from "./order-success/order-success.component";
import { MyOrdersComponent } from "./my-orders/my-orders.component";
import { ProductFilterComponent } from "./products/product-filter/product-filter.component";
import { ShoppingCartSummaryComponent } from "./shopping-cart-summary/shopping-cart-summary.component";
import { ShippingFormComponent } from "./shipping-form/shipping-form.component";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { SharedModule } from "./../shared/shared.module";
import { AuthGardService } from "shared/services/auth-gard.service";

@NgModule({
  declarations: [
    ProductsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    ProductFilterComponent,
    ShoppingCartSummaryComponent,
    ShippingFormComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: "products", component: ProductsComponent },
      { path: "shopping-cart", component: ShoppingCartComponent },

      { path: "order-success/:orderId", component: OrderSuccessComponent },
      {
        path: "my/orders",
        component: MyOrdersComponent,
        canActivate: [AuthGardService]
      },
      {
        path: "check-out",
        component: CheckOutComponent,
        canActivate: [AuthGardService]
      }
    ])
  ]
})
export class ShoppingModule {}
