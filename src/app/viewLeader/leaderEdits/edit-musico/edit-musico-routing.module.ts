import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditMusicoPage } from './edit-musico.page';

const routes: Routes = [
  {
    path: '',
    component: EditMusicoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditMusicoPageRoutingModule {}
