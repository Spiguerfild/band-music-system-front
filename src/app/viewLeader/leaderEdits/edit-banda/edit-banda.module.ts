import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditBandaPageRoutingModule } from './edit-banda-routing.module';

import { EditBandaPage } from './edit-banda.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    EditBandaPageRoutingModule
  ],
  declarations: [EditBandaPage]
})
export class EditBandaPageModule { }
