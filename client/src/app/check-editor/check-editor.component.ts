import { Component, OnInit } from "@angular/core";
import { Transfer } from "../transfer";
import { TransferService } from "../transfer.service";
import { isValue } from "./../helpers.js";
import { StatesService } from "../states.service";

@Component({
  selector: "app-check-editor",
  templateUrl: "./check-editor.component.html",
  styleUrls: ["./check-editor.component.scss"]
})
export class CheckEditorComponent implements OnInit {
  currentTransfers: Transfer[] = [];
  initialTransfers: Transfer[] = [];

  date: number = 0;

  editingId: number;

  constructor(
    private transferService: TransferService,
    private statesService: StatesService
  ) {
    const currentDate = new Date();
    currentDate.setMilliseconds(0);
    this.date = +currentDate / 1000;

    transferService.editingTransfers$.subscribe(data => {
      if (isValue(data)) {
        this.currentTransfers = data;
        this.initialTransfers = data;
        this.date = data[0].date;
      }
    });
  }

  changeDate(data) {
    if (data.date.length === 0 || data.time.length === 0) {
      this.date = 0;
      return;
    }

    const [year, month, day] = data.date.split("-");
    const [hours, minutes] = data.time.split(":");

    const newDate = +new Date(year, month - 1, day, hours, minutes);
    this.date = newDate / 1000;
  }

  saveCheck() {
    if (this.date === 0) return;

    this.currentTransfers = this.currentTransfers.map(transfer => ({
      ...transfer,
      date: this.date
    }));

    const compareIds = transfer => ({ id }) => transfer.id === id;

    const toDelete = this.initialTransfers.filter(
      transfer => this.currentTransfers.find(compareIds(transfer)) === undefined
    );
    const toEdit = this.currentTransfers.filter(
      transfer => this.initialTransfers.find(compareIds(transfer)) !== undefined
    );
    const toAdd = this.currentTransfers.filter(
      transfer => this.initialTransfers.find(compareIds(transfer)) === undefined
    );

    this.transferService.packChange(toDelete, toEdit, toAdd);
    this.closeCheckEditor();
  }

  editTransfer(id: number) {
    this.editingId = id;
  }
  saveTransfer({ id, name, price }) {
    this.currentTransfers = this.currentTransfers.map(transfer => {
      return transfer.id === id ? { ...transfer, name, price } : transfer;
    });
    this.resetTransfer();
  }
  resetTransfer() {
    this.editingId = null;
  }
  removeTransfer(id: number) {
    this.currentTransfers = this.currentTransfers.filter(transfer => {
      return transfer.id !== id;
    });
  }
  addTransfer({ id, name, price, qty }) {
    this.currentTransfers = [
      ...this.currentTransfers,
      { id, name, price, qty, date: this.date }
    ];
  }

  ngOnInit() {}

  closeCheckEditor() {
    this.statesService.closeCheckEditor();
    this.transferService.setEditingTransfers();
  }
}
