import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {AgGrid_DemoRoutingModule} from "./AgGrid_Demo-routing.module";
import {AgGridDemoComponent} from './components/ag-grid-demo/ag-grid-demo.component';


@NgModule({
  imports: [
    CommonModule,
    AgGrid_DemoRoutingModule,
  ],
  declarations: [
    AgGridDemoComponent,
  ],
})
export class AgGrid_DemoModule {
}
