import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelMusicaPage } from './sel-musica.page';

const routes: Routes = [
  {
    path: '',
    component: SelMusicaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelMusicaPageRoutingModule {}
