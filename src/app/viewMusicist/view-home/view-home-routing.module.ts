import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewHomePage } from './view-home.page';

const routes: Routes = [
  {
    path: '',
    component: ViewHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewHomePageRoutingModule {}
