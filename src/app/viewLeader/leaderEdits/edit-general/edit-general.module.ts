import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditGeneralPageRoutingModule } from './edit-general-routing.module';

import { EditGeneralPage } from './edit-general.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditGeneralPageRoutingModule
  ],
  declarations: [EditGeneralPage]
})
export class EditGeneralPageModule {}
