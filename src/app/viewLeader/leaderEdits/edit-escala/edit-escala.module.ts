import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditEscalaPageRoutingModule } from './edit-escala-routing.module';

import { EditEscalaPage } from './edit-escala.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditEscalaPageRoutingModule
  ],
  declarations: [EditEscalaPage]
})
export class EditEscalaPageModule {}
