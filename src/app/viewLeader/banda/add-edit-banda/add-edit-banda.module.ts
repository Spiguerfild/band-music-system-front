import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddEditBandaPageRoutingModule } from './add-edit-banda-routing.module';

import { AddEditBandaPage } from './add-edit-banda.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AddEditBandaPageRoutingModule
  ],
  declarations: [AddEditBandaPage]
})
export class AddEditBandaPageModule { }
