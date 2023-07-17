import { NgModule } from "@angular/core";
import { MaterialModule } from "src/app/shared/material/material.module";
import { CommonModule } from "@angular/common";
import AdminDashboardComponent from "./admin-dashboard.component";
import { AdminDashboardRoutingModule } from "./admin-dashboard-routing.module";
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  declarations: [
    AdminDashboardComponent
  ],
  imports: [
    CommonModule,
    AdminDashboardRoutingModule,
    MaterialModule,
    NgxChartsModule
  ]
})
export class AdminDashboardModule {}
