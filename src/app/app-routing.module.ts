import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'playas',
    pathMatch: 'full'
  },
  {
    path: 'segunda',
    loadChildren: () => import('./segunda/segunda.module').then( m => m.SegundaPageModule)
  },
  {
    path: 'tercera',
    loadChildren: () => import('./tercera/tercera.module').then( m => m.TerceraPageModule)
  },
  {
    path: 'ingreso',
    loadChildren: () => import('./ingreso/ingreso.module').then( m => m.IngresoPageModule)
  },
  {
    path: 'playas',
    loadChildren: () => import('./playas/playas.module').then( m => m.PlayasPageModule)
  },
  {
    path: 'agregar',
    loadChildren: () => import('./agregar/agregar.module').then( m => m.AgregarPageModule)
  },
  {
    path: ':id',
    loadChildren: () => import('./detalle/detalle.module').then( m => m.DetallePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
