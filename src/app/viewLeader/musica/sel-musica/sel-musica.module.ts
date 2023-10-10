import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelMusicaPageRoutingModule } from './sel-musica-routing.module';

import { SelMusicaPage } from './sel-musica.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelMusicaPageRoutingModule
  ],
  declarations: [SelMusicaPage]
})
export class SelMusicaPageModule {}
