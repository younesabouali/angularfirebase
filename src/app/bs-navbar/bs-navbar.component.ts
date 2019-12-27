import { Component } from "@angular/core";
import { AuthService } from "./../services/auth.service";
import { AppUser } from "./../models/app-users";

@Component({
  selector: "app-bs-navbar",
  templateUrl: "./bs-navbar.component.html",
  styleUrls: ["./bs-navbar.component.css"]
})
export class BsNavbarComponent {
  constructor(public auth: AuthService) {
    auth.appUser$.subscribe(user => (this.appUser = user));
  }
  appUser: AppUser;
  logout() {
    this.auth.logout();
  }
}
