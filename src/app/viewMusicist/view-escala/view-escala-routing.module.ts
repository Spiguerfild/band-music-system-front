import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewEscalaPage } from './view-escala.page';

const routes: Routes = [
  {
    path: '',
    component: ViewEscalaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewEscalaPageRoutingModule {}
