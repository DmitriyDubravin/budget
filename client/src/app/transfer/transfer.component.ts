import { Component, OnInit, Input } from "@angular/core";
import { Transfer } from "../transfer";

@Component({
  selector: "app-transfer",
  templateUrl: "./transfer.component.html",
  styleUrls: ["./transfer.component.scss"]
})
export class TransferComponent implements OnInit {
  @Input() transfer: Transfer;
  @Input() isLast: boolean;

  constructor() {}

  ngOnInit() {}
}
