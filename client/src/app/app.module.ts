import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { TransferComponent } from "./transfer/transfer.component";
import { CheckComponent } from "./check/check.component";
import { HttpClientModule } from "@angular/common/http";
import { TotalComponent } from "./total/total.component";
import { LoaderComponent } from "./loader/loader.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { DateComponent } from "./date/date.component";
import { CheckEditorComponent } from "./check-editor/check-editor.component";
import { DateEditorComponent } from "./date-editor/date-editor.component";
import { TransferEditorComponent } from "./transfer-editor/transfer-editor.component";
import { ChecksListComponent } from "./checks-list/checks-list.component";
import { ChecksDayComponent } from "./checks-day/checks-day.component";
import { ReactiveFormsModule } from "@angular/forms";
import { DatePipe } from "@angular/common";
import { PageChecksComponent } from "./page-checks/page-checks.component";
import { PagePeriodComponent } from "./page-period/page-period.component";
import { PageBalanceComponent } from "./page-balance/page-balance.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { MatMenuModule } from "@angular/material/menu";
import { NavMainComponent } from './nav-main/nav-main.component';
import { TransferRowComponent } from './transfer-row/transfer-row.component';
import { TransfersTableComponent } from './transfers-table/transfers-table.component';
import { BalanceTableComponent } from './balance-table/balance-table.component';

@NgModule({
  declarations: [
    AppComponent,
    TransferComponent,
    CheckComponent,
    TotalComponent,
    LoaderComponent,
    DateComponent,
    CheckEditorComponent,
    DateEditorComponent,
    TransferEditorComponent,
    ChecksListComponent,
    ChecksDayComponent,
    PageChecksComponent,
    PagePeriodComponent,
    PageBalanceComponent,
    PageNotFoundComponent,
    NavMainComponent,
    TransferRowComponent,
    TransfersTableComponent,
    BalanceTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatMenuModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule {}
