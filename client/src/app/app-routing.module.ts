import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PageChecksComponent } from "./page-checks/page-checks.component";
import { PagePeriodComponent } from "./page-period/page-period.component";
import { PageBalanceComponent } from "./page-balance/page-balance.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

const routes: Routes = [
  {
    path: "period",
    component: PagePeriodComponent
  },
  {
    path: "balance",
    component: PageBalanceComponent
  },
  {
    path: "checks",
    component: PageChecksComponent
  },
  {
    path: "",
    component: PageChecksComponent
  },
  {
    path: "**",
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
