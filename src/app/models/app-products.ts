import { DataSnapshot } from "@angular/fire/database/interfaces";

export interface AppProduct {
  payload: DataSnapshot;
  type: string;
  prevKey: string;
  key: string;
}
