import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterEscalaPageRoutingModule } from './register-escala-routing.module';

import { RegisterEscalaPage } from './register-escala.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RegisterEscalaPageRoutingModule
  ],
  declarations: [RegisterEscalaPage]
})
export class RegisterEscalaPageModule { }
