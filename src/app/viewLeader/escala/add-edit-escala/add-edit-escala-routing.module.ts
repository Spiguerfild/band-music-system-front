import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddEditEscalaPage } from './add-edit-escala.page';

const routes: Routes = [
  {
    path: '',
    component: AddEditEscalaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddEditEscalaPageRoutingModule {}
