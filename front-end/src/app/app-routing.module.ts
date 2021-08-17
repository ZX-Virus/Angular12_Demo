import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'AdGrid_demo',
    loadChildren: () => import('./pages/AgGrid/AgGrid_Demo.module')
      .then(m => m.AgGrid_DemoModule),
  },
  {
    path: 'Highcharts_demo',
    loadChildren: () => import('./pages/Highcharts/Highcharts_Demo.module')
      .then(m => m.Highcharts_DemoModule),
  },
  {
    path: 'ThreeJS_demo',
    loadChildren: () => import('./pages/3D_Object/ThreeJS_Demo.module')
      .then(m => m.ThreeJS_DemoModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
