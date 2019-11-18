import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Transfer } from "../transfer";
import { TransferService } from "../transfer.service";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "app-transfer-editor",
  templateUrl: "./transfer-editor.component.html",
  styleUrls: ["./transfer-editor.component.scss"]
})
export class TransferEditorComponent implements OnInit {
  @Input() transfer: Transfer;
  @Input() isLast: boolean;
  @Input() state: string;
  @Output() editTransfer = new EventEmitter();
  @Output() saveTransfer = new EventEmitter();
  @Output() resetTransfer = new EventEmitter();
  @Output() removeTransfer = new EventEmitter();
  @Output() addTransfer = new EventEmitter();

  isOutcome = true;

  transferForm;

  constructor() {}

  ngOnInit() {
    const name = this.transfer ? this.transfer.name : "";
    const price = this.transfer ? this.transfer.price : "";
    const qty = this.transfer ? this.transfer.qty : "1";
    this.isOutcome = this.transfer ? this.transfer.price < 0 : true;

    this.transferForm = new FormGroup({
      name: new FormControl(name),
      price: new FormControl(price),
      qty: new FormControl(qty)
    });
  }

  edit() {
    this.editTransfer.emit(this.transfer.id);
  }
  save() {
    let price = +this.transferForm.value.price;
    price = this.isOutcome ? 0 - price : price;

    this.saveTransfer.emit({
      id: this.transfer.id,
      name: this.transferForm.value.name,
      price,
      qty: +this.transferForm.value.qty
    });
  }
  reset() {
    this.resetTransfer.emit();
  }
  remove() {
    this.removeTransfer.emit(this.transfer.id);
  }
  add() {
    const date = new Date();
    date.setMilliseconds(0);
    const id = +date / 1000;

    let price = +this.transferForm.value.price;
    price = this.isOutcome ? 0 - price : price;

    this.addTransfer.emit({
      id,
      name: this.transferForm.value.name,
      price,
      qty: +this.transferForm.value.qty
    });
    this.transferForm.setValue({
      name: "",
      price: "",
      qty: "1"
    });
  }

  toggleIsOutcome() {
    this.isOutcome = !this.isOutcome;
  }
}
