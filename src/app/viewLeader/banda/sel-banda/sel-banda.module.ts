import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelBandaPageRoutingModule } from './sel-banda-routing.module';

import { SelBandaPage } from './sel-banda.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelBandaPageRoutingModule
  ],
  declarations: [SelBandaPage]
})
export class SelBandaPageModule {}
