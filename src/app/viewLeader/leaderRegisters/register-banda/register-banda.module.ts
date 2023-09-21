import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterBandaPageRoutingModule } from './register-banda-routing.module';

import { RegisterBandaPage } from './register-banda.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterBandaPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [RegisterBandaPage]
})
export class RegisterBandaPageModule { }