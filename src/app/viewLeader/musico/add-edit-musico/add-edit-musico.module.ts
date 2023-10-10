import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddEditMusicoPageRoutingModule } from './add-edit-musico-routing.module';

import { AddEditMusicoPage } from './add-edit-musico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddEditMusicoPageRoutingModule
  ],
  declarations: [AddEditMusicoPage]
})
export class AddEditMusicoPageModule {}
