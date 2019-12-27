import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";
import { AuthService } from "./auth.service";
import { map, switchMap } from "rxjs/operators";
import { UserService } from "./user.service";
@Injectable({
  providedIn: "root"
})
export class AdminAuthGardService implements CanActivate {
  constructor(private auth: AuthService, private userService: UserService) {}
  canActivate() {
    return this.auth.appUser$.pipe(map(appUser => appUser.isAdmin));
  }
}
