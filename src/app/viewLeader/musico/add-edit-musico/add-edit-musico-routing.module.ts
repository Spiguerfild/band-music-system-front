import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddEditMusicoPage } from './add-edit-musico.page';

const routes: Routes = [
  {
    path: '',
    component: AddEditMusicoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddEditMusicoPageRoutingModule {}
