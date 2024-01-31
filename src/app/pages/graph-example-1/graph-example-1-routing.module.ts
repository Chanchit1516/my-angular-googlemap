import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GraphExample1Component } from './graph-example-1.component';

const routes: Routes = [
  {
    path: '',
    component: GraphExample1Component,
    children:[
      {
        path: 'graph-example-1',
        component: GraphExample1Component
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GraphExample1RoutingModule { }
