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
  },  {
    path: 'leader-home',
    loadChildren: () => import('./viewLeader/leader-home/leader-home.module').then( m => m.LeaderHomePageModule)
  },
  {
    path: 'edit-general',
    loadChildren: () => import('./viewLeader/leaderEdits/edit-general/edit-general.module').then( m => m.EditGeneralPageModule)
  },
  {
    path: 'edit-musica',
    loadChildren: () => import('./viewLeader/leaderEdits/edit-musica/edit-musica.module').then( m => m.EditMusicaPageModule)
  },
  {
    path: 'edit-musico',
    loadChildren: () => import('./viewLeader/leaderEdits/edit-musico/edit-musico.module').then( m => m.EditMusicoPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
