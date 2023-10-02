import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterEscalaPage } from './register-escala.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterEscalaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterEscalaPageRoutingModule {}
