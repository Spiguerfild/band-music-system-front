import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelInstrumentoPageRoutingModule } from './sel-instrumento-routing.module';

import { SelInstrumentoPage } from './sel-instrumento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelInstrumentoPageRoutingModule
  ],
  declarations: [SelInstrumentoPage]
})
export class SelInstrumentoPageModule {}
