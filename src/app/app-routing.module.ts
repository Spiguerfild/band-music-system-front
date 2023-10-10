import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./paginas/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./paginas/login/login.module').then(m => m.LoginPageModule)
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








];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
