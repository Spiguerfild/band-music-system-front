import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddEditInstrumentoPageRoutingModule } from './add-edit-instrumento-routing.module';

import { AddEditInstrumentoPage } from './add-edit-instrumento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AddEditInstrumentoPageRoutingModule
  ],
  declarations: [AddEditInstrumentoPage]
})
export class AddEditInstrumentoPageModule { }
