import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditGeneralPage } from './edit-general.page';

const routes: Routes = [
  {
    path: '',
    component: EditGeneralPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditGeneralPageRoutingModule {}
