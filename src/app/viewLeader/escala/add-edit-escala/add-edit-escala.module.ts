import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddEditEscalaPageRoutingModule } from './add-edit-escala-routing.module';

import { AddEditEscalaPage } from './add-edit-escala.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AddEditEscalaPageRoutingModule
  ],
  declarations: [AddEditEscalaPage]
})
export class AddEditEscalaPageModule { }
