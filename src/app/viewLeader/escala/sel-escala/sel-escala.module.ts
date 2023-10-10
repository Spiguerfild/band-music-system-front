import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelEscalaPageRoutingModule } from './sel-escala-routing.module';

import { SelEscalaPage } from './sel-escala.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelEscalaPageRoutingModule
  ],
  declarations: [SelEscalaPage]
})
export class SelEscalaPageModule {}
