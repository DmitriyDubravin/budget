import { Component, OnInit } from "@angular/core";
import { Transfer } from "../transfer";
import { TransferService } from "../transfer.service";

@Component({
  selector: "app-balance-table",
  templateUrl: "./balance-table.component.html",
  styleUrls: ["./balance-table.component.scss"]
})
export class BalanceTableComponent implements OnInit {
  income: number = 0;
  outcome: number = 0;
  total: number = 0;

  constructor(private transferService: TransferService) {
    transferService.allTransfers$.subscribe(data => {
      if (transferService.isLoaded()) {
        const { income, outcome } = this.foldTransfers(data);
        this.income = income;
        this.outcome = outcome;
        this.total = this.income + this.outcome;
      }
    });
  }

  foldTransfers(data: Transfer[]): { income: number; outcome: number } {
    return data.reduce(
      (acc, { price }) => {
        const sign = price < 0 ? "outcome" : "income";
        acc[sign] += price;
        return acc;
      },
      { income: 0, outcome: 0 }
    );
  }
  ngOnInit() {}
}
