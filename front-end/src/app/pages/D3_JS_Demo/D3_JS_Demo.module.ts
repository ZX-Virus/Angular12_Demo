import {NgModule} from '@angular/core';
import {D3JSDemoComponent} from './components/d3-js-demo/d3-js-demo.component';
import {CommonModule} from "@angular/common";
import {D3_JS_DemoRoutingModule} from "./D3_JS_Demo-routing.module";


@NgModule({
  imports: [
    CommonModule,
    D3_JS_DemoRoutingModule,
  ],
  declarations: [
    D3JSDemoComponent
  ],
})
export class D3_JS_DemoModule {
}
