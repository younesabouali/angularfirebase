import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/database";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class CategoryService {
  constructor(private db: AngularFireDatabase) {}
  getAll() {
    return this.db
      .list("/categories")
      .snapshotChanges()
      .pipe(
        map(categories =>
          categories.map(category =>
            Object.assign(
              {},
              { name: category.payload.val()["name"], key: category.key }
            )
          )
        )
      );
  }
}
