import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LabelMod } from './label';
import { CardMod } from './card/card.mod';
import { HomeTag } from './home.tag';

const routes: Routes = [{
  path: '',
  component: HomeTag
}];

@NgModule({
  imports: [
    CardMod,
    LabelMod,
    CommonModule,
    RouterModule.forChild(routes)],
  declarations: [HomeTag],
  exports: [RouterModule]
})
export class CardsMod {}
