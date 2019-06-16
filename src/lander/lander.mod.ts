import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { SharedMod } from 'src/app/shared.mod';

import { NavMod } from 'src/nav';
import { CoverTag } from './cover/cover.tag';
import { HomeTag } from './home.tag';
import { Label } from './label';

const routes: Routes = [{
  path: '',
  component: HomeTag
}];

@NgModule({
  imports: [
    SharedMod,
    NavMod,
    CommonModule,
    RouterModule.forChild(routes)],
  providers: [Label],
  declarations: [
    CoverTag,
    HomeTag],
  exports: [RouterModule]
})
export class LanderMod {}
