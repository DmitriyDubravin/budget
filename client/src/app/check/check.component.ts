import { Component, OnInit, Input } from "@angular/core";
import { Transfer } from "../transfer";
import { TransferService } from "../transfer.service";
import { StatesService } from "../states.service";

@Component({
  selector: "app-check",
  templateUrl: "./check.component.html",
  styleUrls: ["./check.component.scss"]
})
export class CheckComponent implements OnInit {
  @Input() checkTransfers: Transfer[];

  constructor(
    private transferService: TransferService,
    private statesService: StatesService
  ) {}

  edit() {
    this.transferService.setEditingTransfers(this.checkTransfers);
    this.statesService.openCheckEditor();
  }

  ngOnInit() {}
}
