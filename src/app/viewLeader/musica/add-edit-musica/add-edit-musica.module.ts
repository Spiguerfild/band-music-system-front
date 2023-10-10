import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddEditMusicaPageRoutingModule } from './add-edit-musica-routing.module';

import { AddEditMusicaPage } from './add-edit-musica.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AddEditMusicaPageRoutingModule
  ],
  declarations: [AddEditMusicaPage]
})
export class AddEditMusicaPageModule { }
