import { Component, OnInit } from "@angular/core";
import { StatesService } from "./../states.service";

@Component({
  selector: "app-page-checks",
  templateUrl: "./page-checks.component.html",
  styleUrls: ["./page-checks.component.scss"]
})
export class PageChecksComponent implements OnInit {
  isShownCheckEditor;

  constructor(private statesService: StatesService) {
    statesService.isShownCheckEditor$.subscribe(state => {
      this.isShownCheckEditor = state;
    });
  }

  ngOnInit() {}

  openCheckEditor() {
    this.statesService.openCheckEditor();
  }
}
