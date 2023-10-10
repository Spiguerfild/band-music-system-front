import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelInstrumentoPage } from './sel-instrumento.page';

const routes: Routes = [
  {
    path: '',
    component: SelInstrumentoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelInstrumentoPageRoutingModule {}
