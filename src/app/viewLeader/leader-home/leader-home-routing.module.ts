import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LeaderHomePage } from './leader-home.page';

const routes: Routes = [
  {
    path: '',
    component: LeaderHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeaderHomePageRoutingModule {}
