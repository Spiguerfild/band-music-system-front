import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditInstrumentoPageRoutingModule } from './edit-instrumento-routing.module';

import { EditInstrumentoPage } from './edit-instrumento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditInstrumentoPageRoutingModule
  ],
  declarations: [EditInstrumentoPage]
})
export class EditInstrumentoPageModule {}
