import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-page-period",
  templateUrl: "./page-period.component.html",
  styleUrls: ["./page-period.component.scss"]
})
export class PagePeriodComponent implements OnInit {
  periodStart: number = 0;
  periodEnd: number = 0;
  localPeriodStart: number = 0;
  localPeriodEnd: number = 0;

  constructor() {
    const currentDate = new Date();
    currentDate.setMilliseconds(0);
    this.periodEnd = +currentDate / 1000;
    currentDate.setDate(1);
    currentDate.setHours(0);
    currentDate.setMinutes(0);
    this.periodStart = +currentDate / 1000;
    this.localPeriodStart = this.periodStart;
    this.localPeriodEnd = this.periodEnd;
  }

  ngOnInit() {}

  buildDate(data) {
    const [year, month, day] = data.date.split("-");
    const [hours, minutes] = data.time.split(":");
    const newDate = +new Date(year, month - 1, day, hours, minutes);
    return newDate / 1000;
  }

  changeStartDate(data) {
    if (data.date.length === 0 || data.time.length === 0) {
      return;
    }
    this.localPeriodStart = this.buildDate(data);
  }
  changeEndDate(data) {
    if (data.date.length === 0 || data.time.length === 0) {
      return;
    }
    this.localPeriodEnd = this.buildDate(data);
  }
  changeDate() {
    this.periodStart = this.localPeriodStart;
    this.periodEnd = this.localPeriodEnd;
  }
}
