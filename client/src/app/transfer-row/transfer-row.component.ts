import { Component, OnInit, Input } from "@angular/core";
import { Transfer } from "../transfer";

@Component({
  selector: "app-transfer-row",
  templateUrl: "./transfer-row.component.html",
  styleUrls: ["./transfer-row.component.scss"]
})
export class TransferRowComponent implements OnInit {
  @Input() transfer: Transfer;

  constructor() {}

  ngOnInit() {}
}
