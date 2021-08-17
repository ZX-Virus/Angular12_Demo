import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {ThreeJS_DemoRoutingModule} from "./ThreeJS_Demo-routing.module";
import {DeloreanComponent} from "./components/delorean/delorean.component";
import {SharedCommonModule} from "../../modules/shared/shared-common.module";


@NgModule({
  imports: [
    CommonModule,
    ThreeJS_DemoRoutingModule,
    SharedCommonModule,
  ],
  declarations: [
    DeloreanComponent,
  ],
})
export class ThreeJS_DemoModule {
}
