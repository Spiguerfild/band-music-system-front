import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddEditMusicaPage } from './add-edit-musica.page';

const routes: Routes = [
  {
    path: '',
    component: AddEditMusicaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddEditMusicaPageRoutingModule {}
