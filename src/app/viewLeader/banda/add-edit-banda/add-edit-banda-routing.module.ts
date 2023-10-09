import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddEditBandaPage } from './add-edit-banda.page';

const routes: Routes = [
  {
    path: '',
    component: AddEditBandaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddEditBandaPageRoutingModule {}
