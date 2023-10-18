import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddEditMusicoInstrumentoPage } from './add-edit-musico-instrumento.page';

const routes: Routes = [
  {
    path: '',
    component: AddEditMusicoInstrumentoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddEditMusicoInstrumentoPageRoutingModule {}
