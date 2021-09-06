import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlayasPage } from './playas.page';

const routes: Routes = [
  {
    path: '',
    component: PlayasPage
  },
    {
    path: 'agregar',
    loadChildren: () => import('../agregar/agregar.module').then( m => m.AgregarPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlayasPageRoutingModule {}
