import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { routes as namedRoutes } from 'src/model';
import { ProfileResolver } from './profile.resolver';
import { HomeTag } from './home/home.tag';

const routes: Routes = [{
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
    path: namedRoutes.cards,
    loadChildren: 'src/cards#CardsMod',
  }, {
    path: 'stats',
    loadChildren: 'src/stats#StatsMod'
  }, {
    path: '**', pathMatch: 'full', redirectTo: namedRoutes.cards
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
