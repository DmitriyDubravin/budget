import { Component, OnInit } from "@angular/core";
import { Transfer } from "../transfer";
import { TransferService } from "./../transfer.service";
import { isValue } from "./../helpers.js";

@Component({
  selector: "app-checks-list",
  templateUrl: "./checks-list.component.html",
  styleUrls: ["./checks-list.component.scss"]
})
export class ChecksListComponent implements OnInit {
  transfers: Transfer[];

  constructor(private transferService: TransferService) {
    transferService.allTransfers$.subscribe(data => {
      if (isValue(data)) {
        this.transfers = this.splitByDay(data);
      }
    });
  }

  ngOnInit() {}

  splitByDay(data) {
    const daysObj = data.reduce((acc, transfer) => {
      const dateObj = new Date(transfer.date * 1000);
      const year = dateObj.getFullYear();
      const month = dateObj.getMonth();
      const day = dateObj.getDate();
      const dayStart = +new Date(year, month, day, 0, 0, 0, 0) / 1000;
      return acc[dayStart] !== undefined
        ? { ...acc, [dayStart]: [...acc[dayStart], transfer] }
        : { ...acc, [dayStart]: [transfer] };
    }, {});

    const daysArr = Object.keys(daysObj)
      .sort()
      .map(key => daysObj[key]);

    return daysArr;
  }
}
