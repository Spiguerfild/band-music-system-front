import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditInstrumentoPage } from './edit-instrumento.page';

const routes: Routes = [
  {
    path: '',
    component: EditInstrumentoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditInstrumentoPageRoutingModule {}
