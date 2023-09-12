import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewHomePageRoutingModule } from './view-home-routing.module';

import { ViewHomePage } from './view-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewHomePageRoutingModule
  ],
  declarations: [ViewHomePage]
})
export class ViewHomePageModule {}
