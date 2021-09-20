import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MatTabsModule} from "@angular/material/tabs";
import {SharedCommonModule} from '@shared/shared-common.module';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedCommonModule,
    MatTabsModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
