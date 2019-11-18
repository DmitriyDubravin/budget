import { Component, OnInit, Input } from "@angular/core";
import { Transfer } from "../transfer";

@Component({
  selector: "app-checks-day",
  templateUrl: "./checks-day.component.html",
  styleUrls: ["./checks-day.component.scss"]
})
export class ChecksDayComponent implements OnInit {
  @Input() dayTransfers: Transfer[];

  constructor() {}

  splitByCheck(data) {
    const checksObj = data.reduce((acc, transfer) => {
      const date = +transfer.date;
      return acc[date] !== undefined
        ? { ...acc, [date]: [...acc[date], transfer] }
        : { ...acc, [date]: [transfer] };
    }, {});

    const checksArr = Object.keys(checksObj)
      .sort()
      .map(key => checksObj[key]);

    return checksArr;
  }

  ngOnInit() {
    this.dayTransfers = this.splitByCheck(this.dayTransfers);
  }
}
