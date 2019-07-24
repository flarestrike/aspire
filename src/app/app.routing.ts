import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { appMods } from 'src/model';
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
    path: 'portfolio',
    loadChildren: 'src/cards#CardsMod'
  }, {
    path: 'digest',
    loadChildren: 'src/digest#DigestMod'
  }, {
    path: 'stats',
    loadChildren: 'src/stats#StatsMod'
  }, {
    path: '**', pathMatch: 'full', redirectTo: 'digest'
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
