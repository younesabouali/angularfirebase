import { NgModule } from "@angular/core";
import { AngularFireModule } from "@angular/fire";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { AdminModule } from "admin/admin.module";
import { ShoppingModule } from "shopping/shopping.module";

import { environment } from "./../environments/environment";
import { AppComponent } from "./app.component";
import { CoreModule } from "./core/core.module";
import { LoginComponent } from "./core/login/login.component";
import { SharedModule } from "./shared/shared.module";
import { ProductsComponent } from "./shopping/products/products.component";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    SharedModule,
    AdminModule,
    ShoppingModule,
    CoreModule,

    AngularFireModule.initializeApp(environment.firebase),
    RouterModule.forRoot([
      { path: "", component: ProductsComponent },
      { path: "login", component: LoginComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
