import { Component, OnInit, OnChanges, Input } from "@angular/core";
import { Transfer } from "../transfer";

@Component({
  selector: "app-total",
  templateUrl: "./total.component.html",
  styleUrls: ["./total.component.scss"]
})
export class TotalComponent implements OnInit, OnChanges {
  @Input() transfers: Transfer[];
  total: number = 0;
  constructor() {}

  getTotal() {
    this.total = this.transfers.reduce((acc, { price }) => acc + price, 0);
  }

  ngOnInit() {
    this.getTotal();
  }
  ngOnChanges() {
    this.getTotal();
  }
}
