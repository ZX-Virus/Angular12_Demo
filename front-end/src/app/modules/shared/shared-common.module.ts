import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SpinnerComponent} from "./spinner/spinner.component";

export const SHARED_COMPONENTS: any[] = [
  SpinnerComponent
];

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    ...SHARED_COMPONENTS,
  ],
  exports: [
    ...SHARED_COMPONENTS,
  ],
  providers: [],
  entryComponents: [],
})
export class SharedCommonModule {
}
