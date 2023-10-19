import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddEditMusicoInstrumentoPageRoutingModule } from './add-edit-musico-instrumento-routing.module';

import { AddEditMusicoInstrumentoPage } from './add-edit-musico-instrumento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AddEditMusicoInstrumentoPageRoutingModule
  ],
  declarations: [AddEditMusicoInstrumentoPage]
})
export class AddEditMusicoInstrumentoPageModule { }
