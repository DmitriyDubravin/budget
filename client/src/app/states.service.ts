import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class StatesService {
  private isShownCheckEditor = new BehaviorSubject<boolean>(false);
  isShownCheckEditor$ = this.isShownCheckEditor.asObservable();

  constructor() {}

  openCheckEditor() {
    this.isShownCheckEditor.next(true);
  }
  closeCheckEditor() {
    this.isShownCheckEditor.next(false);
  }
  toggleCheckEditor() {
    this.isShownCheckEditor.next(!this.isShownCheckEditor);
  }
}
