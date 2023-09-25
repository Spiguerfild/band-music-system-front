import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditEscalaPage } from './edit-escala.page';

const routes: Routes = [
  {
    path: '',
    component: EditEscalaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditEscalaPageRoutingModule {}
