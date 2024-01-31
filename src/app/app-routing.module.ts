import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './shares/main-layout/main-layout.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    // canActivate: [AuthGuard],
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/home-page/home-page.module').then(m => m.HomePageModule)
      },
      {
        path: 'graph-example-1',
        loadChildren: () => import('./pages/graph-example-1/graph-example-1-routing.module').then(m=>m.GraphExample1RoutingModule)
      },
      {
        path: 'graph-example-2',
        loadChildren: () => import('./pages/graph-example-2/graph-example-2-routing.module').then(m=>m.GraphExample2RoutingModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
