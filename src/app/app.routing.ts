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
    loadChildren: appMods.lander.loadChildren
  }, {
    path: appMods.cards.path,
    loadChildren: appMods.cards.loadChildren
  }, {
    path: appMods.digest.path,
    loadChildren: appMods.digest.loadChildren,
  }, {
    path: appMods.stats.path,
    loadChildren: appMods.stats.loadChildren,
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
