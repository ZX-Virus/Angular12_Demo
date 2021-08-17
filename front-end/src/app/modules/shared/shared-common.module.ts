import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SpinnerComponent} from "./spinner/spinner.component";

const SHARED_PIPES: any[] = [];

const SHARED_DIRECTIVES: any[] = [];

const INTERNAL_COMPONENTS: any[] = [];

const SHARED_COMPONENTS: any[] = [
  SpinnerComponent
];

const COMMON_MODULES: any[] = [
];

@NgModule({
  imports: [
    CommonModule,
    ...COMMON_MODULES,
  ],
  declarations: [
    ...SHARED_COMPONENTS,
    ...SHARED_PIPES,
    ...SHARED_DIRECTIVES,
    ...INTERNAL_COMPONENTS,
  ],
  exports: [
    ...SHARED_COMPONENTS,
    ...SHARED_PIPES,
    ...SHARED_DIRECTIVES,
    ...COMMON_MODULES,
  ],
  providers: [],
  entryComponents: [],
})
export class SharedCommonModule {
}
