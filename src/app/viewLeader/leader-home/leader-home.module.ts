import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LeaderHomePageRoutingModule } from './leader-home-routing.module';

import { LeaderHomePage } from './leader-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LeaderHomePageRoutingModule
  ],
  declarations: [LeaderHomePage]
})
export class LeaderHomePageModule {}
