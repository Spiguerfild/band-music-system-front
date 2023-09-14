import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditMusicoPageRoutingModule } from './edit-musico-routing.module';

import { EditMusicoPage } from './edit-musico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditMusicoPageRoutingModule
  ],
  declarations: [EditMusicoPage]
})
export class EditMusicoPageModule {}
