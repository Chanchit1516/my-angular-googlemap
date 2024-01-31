import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GraphExample2Component } from './graph-example-2.component';

const routes: Routes = [
  {
    path: '',
    component: GraphExample2Component,
    children:[
      {
        path: 'graph-example-2',
        component: GraphExample2Component
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GraphExample2RoutingModule { }
