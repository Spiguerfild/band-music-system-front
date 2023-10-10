import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddEditInstrumentoPage } from './add-edit-instrumento.page';

const routes: Routes = [
  {
    path: '',
    component: AddEditInstrumentoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddEditInstrumentoPageRoutingModule {}
