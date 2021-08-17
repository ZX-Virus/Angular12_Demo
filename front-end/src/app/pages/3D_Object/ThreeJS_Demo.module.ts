import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {ThreeJS_DemoRoutingModule} from "./ThreeJS_Demo-routing.module";
import {DeloreanComponent} from "./components/delorean/delorean.component";


@NgModule({
  imports: [
    CommonModule,
    ThreeJS_DemoRoutingModule,
  ],
  declarations: [
    DeloreanComponent,
  ],
})
export class ThreeJS_DemoModule {
}
