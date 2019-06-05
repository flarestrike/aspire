import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { ProfileResolver } from './profile.resolver';
import { HomeTag } from './home/home.tag';

const routes: Routes = [{
//   path: '',
//   component: HomeTag
// }, {
  path: ':id',
  resolve: {
    profile: ProfileResolver
  },
  runGuardsAndResolvers: 'pathParamsOrQueryParamsChange',
  component: HomeTag,
  children: [{
    path: '',
    loadChildren: 'src/lander#LanderMod'
  }, {
    path: 'cards',
    loadChildren: 'src/cards#CardsMod',
  }, {
    path: 'stats',
    loadChildren: 'src/stats#StatsMod'
  }]
}];

@NgModule({
  imports: [
    HttpClientModule,
    RouterModule.forRoot(routes)],
  declarations: [HomeTag],
  exports: [RouterModule]
})
export class AppRouting {}
