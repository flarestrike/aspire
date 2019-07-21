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
    path: appMods.lander.path,
    loadChildren: 'src/lander#LanderMod'
  }, {
    path: appMods.cards.path,
    loadChildren: 'src/cards#CardsMod'
  }, {
    path: appMods.digest.path,
    loadChildren: 'src/digest#DigestMod'
  }, {
    path: appMods.stats.path,
    loadChildren: 'src/stats#StatsMod'
  }, {
    path: '**', pathMatch: 'full', redirectTo: appMods.digest.path
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
