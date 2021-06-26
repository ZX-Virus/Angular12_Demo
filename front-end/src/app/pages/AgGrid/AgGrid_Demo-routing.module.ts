import {RouterModule, Routes} from '@angular/router';
import {NgModule} from "@angular/core";
import {AgGridDemoComponent} from "./components/ag-grid-demo/ag-grid-demo.component";

const routes: Routes = [
  {
    path: '',
    component: AgGridDemoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class AgGrid_DemoRoutingModule {
}
