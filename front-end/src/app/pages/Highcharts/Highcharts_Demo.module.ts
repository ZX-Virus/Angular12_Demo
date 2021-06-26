import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {Highcharts_DemoRoutingModule} from "./Highcharts_Demo-routing.module";

import {HighchartsDemoComponent} from './components/highcharts-demo/highcharts-demo.component';


@NgModule({
  imports: [
    CommonModule,
    Highcharts_DemoRoutingModule,
  ],
  declarations: [
    HighchartsDemoComponent
  ],
})
export class Highcharts_DemoModule {
}
