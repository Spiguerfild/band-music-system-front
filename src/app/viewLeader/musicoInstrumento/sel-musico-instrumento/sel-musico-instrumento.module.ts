import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelMusicoInstrumentoPageRoutingModule } from './sel-musico-instrumento-routing.module';

import { SelMusicoInstrumentoPage } from './sel-musico-instrumento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelMusicoInstrumentoPageRoutingModule
  ],
  declarations: [SelMusicoInstrumentoPage]
})
export class SelMusicoInstrumentoPageModule {}
