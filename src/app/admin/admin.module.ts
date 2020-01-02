import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AuthGardService } from "shared/services/auth-gard.service";
import { SharedModule } from "shared/shared.module";

import { AdminOrdersComponent } from "./components/admin-orders/admin-orders.component";
import { AdminProductsComponent } from "./components/admin-products/admin-products.component";
import { ProductFormComponent } from "./components/product-form/product-form.component";
import { AdminAuthGardService } from "./services/admin-auth-gard.service";

@NgModule({
  declarations: [
    AdminProductsComponent,
    AdminOrdersComponent,
    ProductFormComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: "admin/products/new",
        component: ProductFormComponent,
        canActivate: [AuthGardService, AdminAuthGardService]
      },
      {
        path: "admin/products/:id",
        component: ProductFormComponent,
        canActivate: [AuthGardService, AdminAuthGardService]
      },
      {
        path: "admin/products",
        component: AdminProductsComponent,
        canActivate: [AuthGardService, AdminAuthGardService]
      },
      {
        path: "admin/orders",
        component: AdminOrdersComponent,
        canActivate: [AuthGardService, AdminAuthGardService]
      }
    ])
  ],
  providers: [AdminAuthGardService]
})
export class AdminModule {}
