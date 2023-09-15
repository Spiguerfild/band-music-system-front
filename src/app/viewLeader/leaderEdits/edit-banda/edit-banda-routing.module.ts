import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditBandaPage } from './edit-banda.page';

const routes: Routes = [
  {
    path: '',
    component: EditBandaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditBandaPageRoutingModule {}
