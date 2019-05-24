import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeTag } from './home/home.tag';

const routes: Routes = [{
  path: '',
  component: HomeTag
}, {
  path: ':id',
  component: HomeTag,
  children: [{
    path: '',
    loadChildren: 'src/lander#LanderMod'
  }, {
    path: 'cards',
    loadChildren: 'src/cards#CardsMod'
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  declarations: [HomeTag],
  exports: [RouterModule]
})
export class AppRouting {}
