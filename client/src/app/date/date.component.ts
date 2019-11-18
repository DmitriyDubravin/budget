import { Component, OnInit, Input } from "@angular/core";
import { Transfer } from "../transfer";

@Component({
  selector: "app-date",
  templateUrl: "./date.component.html",
  styleUrls: ["./date.component.scss"]
})
export class DateComponent implements OnInit {
  @Input() transfers: Transfer[];
  date: Date;

  constructor() {}

  getDate() {
    let date = new Date(this.transfers[0].date * 1000);
    this.date = date;
  }

  ngOnInit() {
    this.getDate();
  }
}
