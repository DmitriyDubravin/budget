import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Transfer } from "./transfer";
import { BehaviorSubject } from "rxjs";
import { isValue } from "./helpers.js";

const SERVER = "http://localhost:3000/transfers";

@Injectable({
  providedIn: "root"
})
export class TransferService {
  private allTransfers = new BehaviorSubject<Transfer[]>(null);
  allTransfers$ = this.allTransfers.asObservable();

  private editingTransfers = new BehaviorSubject<Transfer[]>(null);
  editingTransfers$ = this.editingTransfers.asObservable();

  constructor(private http: HttpClient) {
    this.getTransfers();
  }

  getTransfers() {
    this.http.get<Transfer[]>(SERVER).subscribe(result => {
      this.allTransfers.next(result);
    });
  }

  createTransfers(transfers: Transfer[]) {
    this.http.post(`${SERVER}/create`, transfers).subscribe(response => {
      this.getTransfers();
    });
  }

  updateTransfers(transfers: Transfer[]) {
    this.http.post(`${SERVER}/update`, transfers).subscribe(response => {
      this.getTransfers();
    });
  }

  removeTransfers(transfers: Transfer[]) {
    const transfersIds = transfers.map(({ id }) => id);
    this.http.post(`${SERVER}/remove`, transfersIds).subscribe(response => {
      this.getTransfers();
    });
  }

  setEditingTransfers(data = null) {
    this.editingTransfers.next(data);
  }

  packChange(toDelete: Transfer[], toEdit: Transfer[], toAdd: Transfer[]) {
    if (toDelete.length > 0) {
      this.removeTransfers(toDelete);
    }
    if (toEdit.length > 0) {
      this.updateTransfers(toEdit);
    }
    if (toAdd.length > 0) {
      this.createTransfers(toAdd);
    }
  }

  isLoaded() {
    return isValue(this.allTransfers.getValue());
  }
}
