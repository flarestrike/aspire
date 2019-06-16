import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// import { CtIconMod as IconMod, iconSet } from '@chakray/tags';
// import { brand } from 'src/assets/fonts/brand';

import { SharedMod as AppShared } from 'src/app/shared.mod';
import { NavMod as AppNavMod } from 'src/nav';
import { LayoutMod } from 'src/layout';

import { NavMod } from './nav/nav.mod';
import { Label } from './label';
import { CardMod } from './card/card.mod';
import { HomeTag } from './home.tag';

const routes: Routes = [{
  path: '',
  component: HomeTag
}];

@NgModule({
  imports: [
    // CardSrvMod,
    AppShared,
    LayoutMod,
    AppNavMod,
    NavMod,
    // IconMod,
    CardMod,
    CommonModule,
    RouterModule.forChild(routes)],
  providers: [
    Label,
    // { provide: iconSet, useValue: brand, multi: true }
  ],
  declarations: [HomeTag],
  exports: [
    RouterModule]
})
export class CardsMod {}
