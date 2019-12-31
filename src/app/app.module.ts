import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AngularFireModule } from "@angular/fire";
import { FormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { CustomFormsModule } from "ng2-validation";

import { AngularFireAuthModule } from "@angular/fire/auth";
import { environment } from "./../environments/environment";
import { ProductService } from "./product.service";
import { AdminOrdersComponent } from "./admin/admin-orders/admin-orders.component";
import { LoginComponent } from "./login/login.component";
import { AuthGardService as AuthGard } from "./services/auth-gard.service";
import { RouterModule } from "@angular/router";
import { CategoryService } from "./category.service";
import { AdminAuthGardService as AdminAuthGard } from "./services/admin-auth-gard.service";
import { AppComponent } from "./app.component";
import { BsNavbarComponent } from "./bs-navbar/bs-navbar.component";
import { ShoppingCartService } from "./shopping-cart.service";
import { UserService } from "./services/user.service";
import { AuthService } from "./services/auth.service";
import { HomeComponent } from "./home/home.component";
import { ProductsComponent } from "./products/products.component";
import { ShoppingCartComponent } from "./shopping-cart/shopping-cart.component";
import { CheckOutComponent } from "./check-out/check-out.component";
import { OrderSuccessComponent } from "./order-success/order-success.component";
import { MyOrdersComponent } from "./my-orders/my-orders.component";
import { AdminProductsComponent } from "./admin/admin-products/admin-products.component";
import { ProductFormComponent } from "./admin/product-form/product-form.component";
import { ProductFilterComponent } from "./products/product-filter/product-filter.component";
import { ProductCardComponent } from "./product-card/product-card.component";
import { ProductQuantityComponent } from './product-quantity/product-quantity.component';
@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    LoginComponent,
    AdminOrdersComponent,
    ProductFormComponent,
    ProductFilterComponent,
    ProductCardComponent,
    ProductQuantityComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase),
    RouterModule.forRoot([
      { path: "", component: ProductsComponent },
      { path: "products", component: ProductsComponent },
      { path: "shopping-cart", component: ShoppingCartComponent },

      { path: "order-success", component: OrderSuccessComponent },
      { path: "login", component: LoginComponent },
      {
        path: "my/orders",
        component: MyOrdersComponent,
        canActivate: [AuthGard]
      },
      {
        path: "check-out",
        component: CheckOutComponent,
        canActivate: [AuthGard]
      },
      {
        path: "admin/products/new",
        component: ProductFormComponent,
        canActivate: [AuthGard, AdminAuthGard]
      },
      {
        path: "admin/products/:id",
        component: ProductFormComponent,
        canActivate: [AuthGard, AdminAuthGard]
      },
      {
        path: "admin/products",
        component: AdminProductsComponent,
        canActivate: [AuthGard, AdminAuthGard]
      },
      {
        path: "admin/orders",
        component: AdminOrdersComponent,
        canActivate: [AuthGard, AdminAuthGard]
      }
    ]),
    CustomFormsModule
  ],
  providers: [
    AuthService,
    AuthGard,
    UserService,
    AdminAuthGard,
    CategoryService,
    ProductService,
    ShoppingCartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
