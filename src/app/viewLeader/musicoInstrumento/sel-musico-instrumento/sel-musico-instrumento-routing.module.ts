import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelMusicoInstrumentoPage } from './sel-musico-instrumento.page';

const routes: Routes = [
  {
    path: '',
    component: SelMusicoInstrumentoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelMusicoInstrumentoPageRoutingModule {}
