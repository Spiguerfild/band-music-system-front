import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterBandaPage } from './register-banda.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterBandaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterBandaPageRoutingModule {}
