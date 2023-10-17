import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewEscalaPageRoutingModule } from './view-escala-routing.module';

import { ViewEscalaPage } from './view-escala.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewEscalaPageRoutingModule
  ],
  declarations: [ViewEscalaPage]
})
export class ViewEscalaPageModule { }
