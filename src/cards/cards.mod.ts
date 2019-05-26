import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { CtIconMod as IconMod, iconSet } from '@chakray/tags';
import { aspire } from 'src/assets/fonts/aspire';

import { LabelMod } from './label';
import { CardMod } from './card/card.mod';
import { HomeTag } from './home.tag';

const routes: Routes = [{
  path: '',
  component: HomeTag
}];

@NgModule({
  imports: [
    IconMod,
    CardMod,
    LabelMod,
    CommonModule,
    RouterModule.forChild(routes)],
  providers: [{
    provide: iconSet, useValue: aspire, multi: true
  }],
  declarations: [HomeTag],
  exports: [RouterModule]
})
export class CardsMod {}
