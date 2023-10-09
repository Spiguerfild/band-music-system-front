import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelBandaPage } from './sel-banda.page';

const routes: Routes = [
  {
    path: '',
    component: SelBandaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelBandaPageRoutingModule {}
