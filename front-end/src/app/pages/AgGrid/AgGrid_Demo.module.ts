import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {AgGrid_DemoRoutingModule} from "./AgGrid_Demo-routing.module";
import {AgGridDemoComponent} from './components/ag-grid-demo/ag-grid-demo.component';
import {AgGridModule} from 'ag-grid-angular';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    AgGrid_DemoRoutingModule,
    AgGridModule.withComponents([])
  ],
  declarations: [
    AgGridDemoComponent,
  ],
})
export class AgGrid_DemoModule {
}
