import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { CtIconMod as IconMod, iconSet } from '@chakray/tags';

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
    IconMod,
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
