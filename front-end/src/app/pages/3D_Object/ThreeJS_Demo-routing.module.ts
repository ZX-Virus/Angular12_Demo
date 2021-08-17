import {RouterModule, Routes} from '@angular/router';
import {NgModule} from "@angular/core";
import {DeloreanComponent} from "./components/delorean/delorean.component";

const routes: Routes = [
  {
    path: '',
    component: DeloreanComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class ThreeJS_DemoRoutingModule {
}
