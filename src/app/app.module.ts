import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MusicaService } from './services/domain/musica.service';
import { MusicoService } from './services/domain/musico.service';
import { instrumentoService } from './services/domain/instrumento.service';
import { bandaService } from './services/domain/banda.service';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, MusicaService, MusicoService, instrumentoService, bandaService],
  bootstrap: [AppComponent],

})
export class AppModule { }
