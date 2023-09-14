import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditMusicaPage } from './edit-musica.page';

const routes: Routes = [
  {
    path: '',
    component: EditMusicaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditMusicaPageRoutingModule {}
