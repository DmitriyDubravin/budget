import { Component, OnInit, Input, OnChanges } from "@angular/core";
import { TransferService } from "../transfer.service";
import { Transfer } from "../transfer";

@Component({
  selector: "app-transfers-table",
  templateUrl: "./transfers-table.component.html",
  styleUrls: ["./transfers-table.component.scss"]
})
export class TransfersTableComponent implements OnChanges {
  @Input() periodStart: number;
  @Input() periodEnd: number;
  initialTransfers: Transfer[] = [];
  transfersSet = [];
  total: number = 0;

  constructor(private transferService: TransferService) {
    transferService.allTransfers$.subscribe(data => {
      if (transferService.isLoaded()) {
        this.initialTransfers = data;
        this.transfersSet = this.buildTable(data);

      }
    });
  }

  ngOnChanges() {
    this.transfersSet = this.buildTable(this.initialTransfers);
  }

  buildTable(data) {
    const transfers = this.splitByPeriod(data);
    this.total = this.countTotal(transfers);
    const s = transfers.reduce((acc, { name, price, qty }) => {
      if (acc[name] === undefined) {
        acc[name] = {
          name: name,
          prices: [price],
          qty: qty
        };
      } else {
        acc[name] = {
          ...acc[name],
          prices: [...acc[name].prices, price],
          qty: acc[name].qty + qty
        };
      }
      return acc;
    }, {});

    const a = Object.keys(s).sort();
    return a.map(name => {
      const item = s[name];
      const prices = item.prices.reduce((acc, price) => acc + price, 0);
      return { ...item, prices: prices, avg: prices / item.prices.length };
    });
  }

  splitByPeriod(data: Transfer[]): Transfer[] {
    const start = this.periodStart;
    const end = this.periodEnd;
    return data.filter(transfer => {
      return transfer.date >= start && transfer.date < end;
    });
  }

  countTotal(data: Transfer[]) {
    return data.reduce((acc, { price }) => acc + +price, 0);
  }
}
