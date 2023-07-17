import { NgModule } from "@angular/core";
import HeaderComponent from "./header/header.component";
import SidePanelComponent from "./side-panel/side-panel.component";
import { MaterialModule } from "src/app/shared/material/material.module";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [
    HeaderComponent,
    SidePanelComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot([]),
    MaterialModule
  ],
  exports: [
    HeaderComponent,
    SidePanelComponent
  ]
})
export class LayoutModule {}
