import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'D3_Demo',
    loadChildren: () => import('./pages/D3_JS_Demo/D3_JS_Demo.module')
      .then(m => m.D3_JS_DemoModule),
  },
  {
    path: 'AdGrid',
    loadChildren: () => import('./pages/AgGrid/AgGrid_Demo.module')
      .then(m => m.AgGrid_DemoModule),
  },
  {
    path: 'Highcharts',
    loadChildren: () => import('./pages/Highcharts/Highcharts_Demo.module')
      .then(m => m.Highcharts_DemoModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
