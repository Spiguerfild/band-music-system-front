import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelMusicoPageRoutingModule } from './sel-musico-routing.module';

import { SelMusicoPage } from './sel-musico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelMusicoPageRoutingModule
  ],
  declarations: [SelMusicoPage]
})
export class SelMusicoPageModule {}
