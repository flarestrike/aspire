import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { SharedMod as AppShared } from 'src/app/shared.mod';
import { LayoutMod } from 'src/layout';
import { DtTopicMod } from './topic/topic.mod';

import { HomeTag } from './home.tag';

const routes: Routes = [{
  path: '',
  component: HomeTag
}];

@NgModule({
  imports: [
    DtTopicMod,
    AppShared,
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
