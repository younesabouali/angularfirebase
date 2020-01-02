import { Component } from "@angular/core";
import { AuthService } from "shared/services/auth.service";
import { AppUser } from "shared/models/app-users";
import { ShoppingCartService } from "shared/services/shopping-cart.service";
import { OnInit } from "@angular/core";
import { Observable } from "rxjs";
@Component({
  selector: "app-bs-navbar",
  templateUrl: "./bs-navbar.component.html",
  styleUrls: ["./bs-navbar.component.css"]
})
export class BsNavbarComponent implements OnInit {
  cart$;
  constructor(
    public auth: AuthService,
    private shoppingCartService: ShoppingCartService
  ) {
    auth.appUser$.subscribe(user => (this.appUser = user));
  }
  appUser: AppUser;
  logout() {
    this.auth.logout();
  }
  async ngOnInit() {
    this.cart$ = await this.shoppingCartService.getCart();
  }
}
