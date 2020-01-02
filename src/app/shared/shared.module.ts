import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { FormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { CustomFormsModule } from "ng2-validation";
import { ProductCardComponent } from "shared/components/product-card/product-card.component";
import { ProductQuantityComponent } from "shared/components/product-quantity/product-quantity.component";
import { AuthGardService } from "shared/services/auth-gard.service";

import { AuthService } from "./services/auth.service";
import { CategoryService } from "./services/category.service";
import { OrderService } from "./services/order.service";
import { ProductService } from "./services/product.service";
import { ShoppingCartService } from "./services/shopping-cart.service";
import { UserService } from "./services/user.service";

@NgModule({
  declarations: [ProductCardComponent, ProductQuantityComponent],
  exports: [
    ProductCardComponent,
    ProductQuantityComponent,
    FormsModule,
    CustomFormsModule,
    NgbModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    CommonModule
  ],
  imports: [
    CommonModule,
    FormsModule,
    CustomFormsModule,
    NgbModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  providers: [
    AuthService,
    AuthGardService,
    UserService,
    CategoryService,
    ProductService,
    ShoppingCartService,
    OrderService
  ]
})
export class SharedModule {}
