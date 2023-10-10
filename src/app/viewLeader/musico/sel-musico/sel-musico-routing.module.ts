import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelMusicoPage } from './sel-musico.page';

const routes: Routes = [
  {
    path: '',
    component: SelMusicoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelMusicoPageRoutingModule {}
