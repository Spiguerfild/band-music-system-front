import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditMusicaPageRoutingModule } from './edit-musica-routing.module';

import { EditMusicaPage } from './edit-musica.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditMusicaPageRoutingModule
  ],
  declarations: [EditMusicaPage]
})
export class EditMusicaPageModule {}
