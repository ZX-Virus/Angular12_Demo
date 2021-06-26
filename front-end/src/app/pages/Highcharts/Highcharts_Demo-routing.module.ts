import {RouterModule, Routes} from '@angular/router';
import {NgModule} from "@angular/core";
import {HighchartsDemoComponent} from "./components/highcharts-demo/highcharts-demo.component";

const routes: Routes = [
  {
    path: '',
    component: HighchartsDemoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class Highcharts_DemoRoutingModule {
}
