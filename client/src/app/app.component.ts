import { Component } from "@angular/core";
import { TransferService } from "./transfer.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "budget";

  isLoading: boolean = true;

  constructor(private transferService: TransferService) {
    transferService.allTransfers$.subscribe(data => {
      if (transferService.isLoaded()) {
        this.isLoading = false;
      }
    });
  }
}
