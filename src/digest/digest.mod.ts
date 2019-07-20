import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LayoutMod } from 'src/layout';
import { NavMod } from 'src/nav';
import { DtTopicMod } from './topic/topic.mod';

import { HomeTag } from './home.tag';

const routes: Routes = [{
  path: '',
  component: HomeTag
}];

@NgModule({
  imports: [
    DtTopicMod,
    NavMod,
    LayoutMod,
    CommonModule,
    RouterModule.forChild(routes)],
  providers: [
    // Label,
  ],
  declarations: [HomeTag],
  exports: [
    RouterModule]
})
export class DigestMod {}
