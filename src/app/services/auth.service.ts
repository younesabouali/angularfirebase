import { Injectable } from "@angular/core";
import { auth } from "firebase/app";
import { AngularFireAuth } from "@angular/fire/auth";
import { Router, ActivatedRoute } from "@angular/router";
import * as firebase from "firebase";
import { Observable, observable } from "rxjs";
import { AppUser } from "../models/app-users";
import { UserService } from "./user.service";
import { switchMap } from "rxjs/operators";
import { map } from "rxjs/operators";
import { of } from "rxjs";
@Injectable({
  providedIn: "root"
})
export class AuthService {
  user$: Observable<firebase.User>;

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private route: ActivatedRoute,
    private UserService: UserService
  ) {
    this.user$ = this.afAuth.authState;
  }
  public login() {
    let returnUrl = this.route.snapshot.queryParamMap.get("returnUrl") || "/";
    localStorage.setItem("returnUrl", returnUrl);
    this.afAuth.auth.signInWithRedirect(new auth.GoogleAuthProvider());
  }
  public logout() {
    this.afAuth.auth.signOut();
  }
  get appUser$(): Observable<AppUser> {
    return this.user$.pipe(
      switchMap(user => {
        if (!user) return of(null);
        return this.UserService.get(user.uid).valueChanges();
      })
    );
  }
}
