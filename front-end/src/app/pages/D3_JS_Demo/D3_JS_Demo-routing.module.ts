import {RouterModule, Routes} from '@angular/router';
import {D3JSDemoComponent} from "./components/d3-js-demo/d3-js-demo.component";
import {NgModule} from "@angular/core";

const routes: Routes = [
  {
    path: '',
    component: D3JSDemoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class D3_JS_DemoRoutingModule {
}
