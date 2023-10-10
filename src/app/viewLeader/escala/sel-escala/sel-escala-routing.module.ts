import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelEscalaPage } from './sel-escala.page';

const routes: Routes = [
  {
    path: '',
    component: SelEscalaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelEscalaPageRoutingModule {}
