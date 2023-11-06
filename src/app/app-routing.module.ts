import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'view-home',
    loadChildren: () => import('./viewMusicist/view-home/view-home.module').then(m => m.ViewHomePageModule)
  },
  {
    path: 'leader-home',
    loadChildren: () => import('./viewLeader/leader-home/leader-home.module').then(m => m.LeaderHomePageModule)
  },
  {
    path: 'sel-banda',
    loadChildren: () => import('./viewLeader/banda/sel-banda/sel-banda.module').then(m => m.SelBandaPageModule)
  },
  {
    path: 'add-edit-banda/:id',
    loadChildren: () => import('./viewLeader/banda/add-edit-banda/add-edit-banda.module').then(m => m.AddEditBandaPageModule)
  },
  {
    path: 'add-edit-musica/:id',
    loadChildren: () => import('./viewLeader/musica/add-edit-musica/add-edit-musica.module').then(m => m.AddEditMusicaPageModule)
  },
  {
    path: 'sel-musica',
    loadChildren: () => import('./viewLeader/musica/sel-musica/sel-musica.module').then(m => m.SelMusicaPageModule)
  },
  {
    path: 'sel-musico',
    loadChildren: () => import('./viewLeader/musico/sel-musico/sel-musico.module').then(m => m.SelMusicoPageModule)
  },
  {
    path: 'add-edit-musico/:id',
    loadChildren: () => import('./viewLeader/musico/add-edit-musico/add-edit-musico.module').then(m => m.AddEditMusicoPageModule)
  },
  {
    path: 'sel-instrumento',
    loadChildren: () => import('./viewLeader/instrumento/sel-instrumento/sel-instrumento.module').then(m => m.SelInstrumentoPageModule)
  },
  {
    path: 'add-edit-instrumento/:id',
    loadChildren: () => import('./viewLeader/instrumento/add-edit-instrumento/add-edit-instrumento.module').then(m => m.AddEditInstrumentoPageModule)
  },
  {
    path: 'add-edit-escala/:id',
    loadChildren: () => import('./viewLeader/escala/add-edit-escala/add-edit-escala.module').then(m => m.AddEditEscalaPageModule)
  },
  {
    path: 'sel-escala',
    loadChildren: () => import('./viewLeader/escala/sel-escala/sel-escala.module').then(m => m.SelEscalaPageModule)
  },
  {
    path: 'view-escala/:id',
    loadChildren: () => import('./viewMusicist/view-escala/view-escala.module').then(m => m.ViewEscalaPageModule)
  },
  {
    path: 'add-edit-musico-instrumento/:id',
    loadChildren: () => import('./viewLeader/musicoInstrumento/add-edit-musico-instrumento/add-edit-musico-instrumento.module').then(m => m.AddEditMusicoInstrumentoPageModule)
  },
  {
    path: 'sel-musico-instrumento',
    loadChildren: () => import('./viewLeader/musicoInstrumento/sel-musico-instrumento/sel-musico-instrumento.module').then(m => m.SelMusicoInstrumentoPageModule)
  },













];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
