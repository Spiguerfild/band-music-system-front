import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterGeneralPage } from './register-general.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterGeneralPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterGeneralPageRoutingModule {}
